import {
  addPost,
  deletePost,
  savePhotoSuccess,
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
  | DeletePostType
  | ReturnType<typeof savePhotoSuccess>;
export type InitialStateType = typeof initialState;
