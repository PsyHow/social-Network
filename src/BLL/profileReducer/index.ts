export { updateStatus, getStatus, getUserProfile } from './Thunk';
export { addPost, deletePost, setUserProfile, setStatus } from './Actions';
export { profileReducer, initialState } from './profileReducer';
export type {
  InitialStateType,
  ProfileActionType,
  DeletePostType,
  AddPostType,
} from './Types';
