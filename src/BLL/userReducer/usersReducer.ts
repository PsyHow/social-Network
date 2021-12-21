import { InitialStateType, UsersActionType } from 'BLL/userReducer/Types';
import { UsersType } from 'types/types';

export const initialState = {
  users: [] as UsersType[],
  pageSize: 10,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: true,
  followingProgress: [] as number[], // array of users id
};

export const UsersReducer = (
  state = initialState,
  action: UsersActionType,
): InitialStateType => {
  switch (action.type) {
    case 'USERS/FOLLOW':
      return {
        ...state,
        users: [...state.users].map(m =>
          m.id === action.id ? { ...m, followed: true } : m,
        ),
      };
    case 'USERS/UNFOLLOW':
      return {
        ...state,
        users: [...state.users].map(m =>
          m.id === action.id ? { ...m, followed: false } : m,
        ),
      };
    case 'USERS/SET_USERS':
      return { ...state, users: action.users };
    case 'USERS/SET_CURRENT_PAGE':
      return { ...state, currentPage: action.currentPage };
    case 'USERS/SET_TOTAL_USERS_COUNT':
      return { ...state, totalUsersCount: action.totalCount };
    case 'USERS/TOGGLE_IS_FETCHING':
      return { ...state, isFetching: action.isFetching };
    case 'USERS/FOLLOWING_IN_PROGRESS':
      return {
        ...state,
        followingProgress: action.isFetching
          ? [...state.followingProgress, action.userId]
          : state.followingProgress.filter(id => id !== action.userId),
      };
    default:
      return state;
  }
};
