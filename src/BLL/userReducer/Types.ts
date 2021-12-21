import { initialState } from './usersReducer';

import {
  followingInProgress,
  followSuccess,
  setCurrentPage,
  setTotalUsersCount,
  setUsers,
  toggleIsFetching,
  unFollowSuccess,
} from 'BLL/userReducer/Actions';

export type SetUsersType = ReturnType<typeof setUsers>;
export type UsersActionType =
  | ReturnType<typeof followSuccess>
  | ReturnType<typeof unFollowSuccess>
  | SetUsersType
  | ReturnType<typeof setCurrentPage>
  | ReturnType<typeof setTotalUsersCount>
  | ReturnType<typeof toggleIsFetching>
  | ReturnType<typeof followingInProgress>;

export type InitialStateType = typeof initialState;
