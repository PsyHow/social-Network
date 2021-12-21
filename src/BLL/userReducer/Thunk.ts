import { usersAPI } from 'api/Api';
import { AppThunkType } from 'BLL/redux-store';
import {
  followingInProgress,
  followSuccess,
  setCurrentPage,
  setTotalUsersCount,
  setUsers,
  toggleIsFetching,
  unFollowSuccess,
} from 'BLL/userReducer/Actions';
import { okResult } from 'constants/constants';

export const requestUsers =
  (page: number, pageSize: number): AppThunkType =>
  async dispatch => {
    dispatch(toggleIsFetching(true));
    dispatch(setCurrentPage(page));

    const data = await usersAPI.getUsers(page, pageSize);
    dispatch(toggleIsFetching(false));
    dispatch(setUsers(data.items));
    dispatch(setTotalUsersCount(data.totalCount));
  };

export const follow =
  (userId: number): AppThunkType =>
  async dispatch => {
    dispatch(followingInProgress(true, userId));
    const response = await usersAPI.unfollowUser(userId);

    if (response.resultCode === okResult) {
      dispatch(unFollowSuccess(userId));
    }
    dispatch(followingInProgress(false, userId));
  };

export const unFollow =
  (userId: number): AppThunkType =>
  async dispatch => {
    dispatch(followingInProgress(true, userId));
    const response = await usersAPI.followUser(userId);

    if (response.resultCode === okResult) {
      dispatch(followSuccess(userId));
    }
    dispatch(followingInProgress(false, userId));
  };
