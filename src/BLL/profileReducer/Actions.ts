import { UserProfileType } from 'types';

export const addPost = (newPostMessage: string) =>
  ({ type: 'PROFILE/ADD_POST', newPostMessage } as const);

export const setUserProfile = (profile: UserProfileType) =>
  ({ type: 'PROFILE/SET_USER_PROFILE', profile } as const);

export const setStatus = (status: string) =>
  ({ type: 'PROFILE/SET_STATUS', status } as const);

export const deletePost = (id: number) => ({ type: 'PROFILE/DELETE_POST', id } as const);
