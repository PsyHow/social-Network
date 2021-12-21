import { UsersType } from 'types';

export const followSuccess = (id: number) => ({ type: 'USERS/FOLLOW', id } as const);

export const unFollowSuccess = (id: number) => ({ type: 'USERS/UNFOLLOW', id } as const);

export const setUsers = (users: Array<UsersType>) =>
  ({ type: 'USERS/SET_USERS', users } as const);

export const setCurrentPage = (currentPage: number) =>
  ({
    type: 'USERS/SET_CURRENT_PAGE',
    currentPage,
  } as const);

export const setTotalUsersCount = (totalCount: number) =>
  ({
    type: 'USERS/SET_TOTAL_USERS_COUNT',
    totalCount,
  } as const);

export const toggleIsFetching = (isFetching: boolean) =>
  ({ type: 'USERS/TOGGLE_IS_FETCHING', isFetching } as const);

export const followingInProgress = (isFetching: boolean, userId: number) =>
  ({
    type: 'USERS/FOLLOWING_IN_PROGRESS',
    isFetching,
    userId,
  } as const);
