import { Component, ComponentType } from 'react';

import { connect } from 'react-redux';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { compose } from 'redux';

import { Profile } from './Profile';

import { AppStateType, getStatus, updateStatus } from 'BLL';
import { getUserProfile, savePhoto } from 'BLL/profileReducer/Thunk';
import { getAuthID, getIsAuth, getProfile, getProfileStatus } from 'selectors';
import { Nullable, UserProfileType } from 'types';

class ProfileContainer extends Component<PropsType> {
  componentDidMount() {
    this.refreshProfile();
  }

  componentDidUpdate(prevProps: PropsType) {
    const { match } = this.props;
    if (match.params.userId !== prevProps.match.params.userId) {
      this.refreshProfile();
    }
  }

  refreshProfile() {
    const { match, authorizedUserId, history, getUserProfile, getStatus } = this.props;
    let userId: number | null = +match.params.userId;
    if (!userId) {
      userId = authorizedUserId;
      if (!userId) {
        history.push('/login');
      }
    }
    if (!userId) {
      console.error("ID should exists in URI params or in state ('authorizedUserId')");
    } else {
      getUserProfile(userId);
      getStatus(userId);
    }
  }

  render() {
    const { profile, status, updateStatus, match, savePhoto } = this.props;
    return (
      <div>
        <Profile
          profile={profile}
          status={status}
          updateStatus={updateStatus}
          isOwner={!match.params.userId}
          savePhoto={savePhoto}
        />
      </div>
    );
  }
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
  profile: getProfile(state),
  status: getProfileStatus(state),
  authorizedUserId: getAuthID(state),
  isAuth: getIsAuth(state),
});

// important type compose with generic <React.ComponentType>
export default compose<ComponentType>(
  connect(mapStateToProps, { getUserProfile, getStatus, updateStatus, savePhoto }),
  withRouter,
)(ProfileContainer);

// types
type MapDispatchToPropsType = {
  getUserProfile: (userId: number) => void;
  getStatus: (userId: number) => void;
  updateStatus: (status: string) => void;
  savePhoto: (file: File) => void;
};

type MapStateToPropsType = {
  profile: Nullable<UserProfileType>;
  status: string;
  authorizedUserId: Nullable<number>;
  isAuth: boolean;
};

type PathParamsType = {
  userId: string;
};

type PropsType = RouteComponentProps<PathParamsType> &
  MapDispatchToPropsType &
  MapStateToPropsType;
