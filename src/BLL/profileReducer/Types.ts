import {
  addPost,
  deletePost,
  setStatus,
  setUserProfile,
} from 'BLL/profileReducer/Actions';
import { initialState } from 'BLL/profileReducer/profileReducer';

export type DeletePostType = ReturnType<typeof deletePost>;
export type AddPostType = ReturnType<typeof addPost>;
export type ProfileActionType =
  | AddPostType
  | ReturnType<typeof setUserProfile>
  | ReturnType<typeof setStatus>
  | DeletePostType;
export type InitialStateType = typeof initialState;
