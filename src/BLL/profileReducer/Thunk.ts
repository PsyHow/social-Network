import { profileAPI } from 'api/Api';
import { AppThunkType, setStatus, setUserProfile } from 'BLL';
import { savePhotoSuccess } from 'BLL/profileReducer/Actions';
import { okResult } from 'constants/constants';

export const getUserProfile =
  (userId: number): AppThunkType =>
  async dispatch => {
    const data = await profileAPI.setUserProfile(userId);
    dispatch(setUserProfile(data));
  };

export const getStatus =
  (userId: number): AppThunkType =>
  async dispatch => {
    const response = await profileAPI.getStatus(userId);
    dispatch(setStatus(response.data));
  };

export const updateStatus =
  (status: string): AppThunkType =>
  async dispatch => {
    const response = await profileAPI.updateStatus(status);
    if (response.data.resultCode === okResult) {
      dispatch(setStatus(status));
    }
  };

export const savePhoto =
  (file: File): AppThunkType =>
  async dispatch => {
    const data = await profileAPI.savePhoto(file);
    if (data.resultCode === okResult) {
      dispatch(savePhotoSuccess(data.data.photos));
    }
  };
