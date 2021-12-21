import { Component, ComponentType } from 'react';

import { connect } from 'react-redux';
import { compose } from 'redux';

import { Users } from './Users';

import {
  AppStateType,
  followingInProgress,
  setCurrentPage,
  follow,
  requestUsers,
  unFollow,
} from 'BLL';
import { Preloader } from 'components';
import {
  currentPage,
  followingProgress,
  getPageSize,
  getUsers,
  isFetching,
  totalUsersCount,
} from 'selectors';
import { UsersType } from 'types';

const mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
  usersPage: getUsers(state),
  pageSize: getPageSize(state),
  totalUsersCount: totalUsersCount(state),
  currentPage: currentPage(state),
  isFetching: isFetching(state),
  followProgress: followingProgress(state),
});

export class UsersAPIComponent extends Component<UsersPropsType> {
  componentDidMount() {
    const { currentPage, pageSize, getUsers } = this.props;
    getUsers(currentPage, pageSize);
  }

  onPageChanged = (pageNumber: number) => {
    const { pageSize, getUsers } = this.props;
    getUsers(pageNumber, pageSize);
  };

  render() {
    const {
      isFetching,
      totalUsersCount,
      pageSize,
      follow,
      unFollow,
      usersPage,
      currentPage,
      followProgress,
    } = this.props;
    return (
      <>
        {isFetching ? <Preloader /> : null}
        <Users
          totalUsersCount={totalUsersCount}
          pageSize={pageSize}
          follow={follow}
          unFollow={unFollow}
          usersPage={usersPage}
          currentPage={currentPage}
          onPageChanged={this.onPageChanged}
          followProgress={followProgress}
        />
      </>
    );
  }
}

// important type compose with generic <React.ComponentType>
export const UserContainerFunc = compose<ComponentType>(
  connect(mapStateToProps, {
    follow,
    unFollow,
    setCurrentPage,
    getUsers: requestUsers,
    followingInProgress,
  }),
)(UsersAPIComponent);

// types
type UsersPropsType = MapStateToPropsType & mapDispatchToPropsType;
type MapStateToPropsType = {
  usersPage: UsersType[];
  pageSize: number;
  totalUsersCount: number;
  currentPage: number;
  isFetching: boolean;
  followProgress: number[];
};
type mapDispatchToPropsType = {
  follow: (id: number) => void;
  unFollow: (id: number) => void;
  setCurrentPage: (currentPage: number) => void;
  followingInProgress: (isFetching: boolean, userId: number) => void;
  getUsers: (currentPage: number, pageSize: number) => void;
};
