import { Component, ComponentType } from 'react';

import { connect } from 'react-redux';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { compose } from 'redux';

import { Profile } from './Profile';

import { getStatus, SetUserProfile, updateStatus, AppStateType } from 'BLL';
import { savePhoto } from 'BLL/profileReducer/Thunk';
import { withAuthRedirect } from 'hoc';
import { getAuthID, getIsAuth, getProfile, getProfileStatus } from 'selectors';
import { Nullable, UserProfileType } from 'types';

class ProfileContainer extends Component<PropsType> {
  componentDidMount() {
    this.refreshProfile();
  }

  componentDidUpdate(prevProps: Readonly<PropsType>) {
    const { match } = this.props;
    if (match.params.userId !== prevProps.match.params.userId) {
      this.refreshProfile();
    }
  }

  refreshProfile() {
    const { match, authorizedUserId, SetUserProfile, getStatus, history } = this.props;

    let { userId } = match.params;
    if (!userId) {
      userId = JSON.stringify(authorizedUserId);
      if (!userId) {
        history.push('/login');
      }
    }
    SetUserProfile(userId);
    getStatus(userId);
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
const ProfileContainerFunc = compose<ComponentType>(
  connect(mapStateToProps, { SetUserProfile, getStatus, updateStatus, savePhoto }),
  withRouter,
  withAuthRedirect,
)(ProfileContainer);

// types
type ProfilePropsType = MapDispatchToPropsType & MapStateToPropsType;
type MapDispatchToPropsType = {
  SetUserProfile: (userId: string) => void;
  getStatus: (userId: string) => void;
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
type PropsType = RouteComponentProps<PathParamsType> & ProfilePropsType;

export default ProfileContainerFunc;
