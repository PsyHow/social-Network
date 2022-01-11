import { stopSubmit } from 'redux-form';

import { profileAPI } from 'api/Api';
import { AppThunkType, setStatus, setUserProfile } from 'BLL';
import { savePhotoSuccess } from 'BLL/profileReducer/Actions';
import { okResult } from 'constants/constants';
import { UserProfileType } from 'types';

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

export const saveProfile =
  (profile: UserProfileType): AppThunkType =>
  // eslint-disable-next-line consistent-return
  async (dispatch, getState) => {
    const userId = getState().auth.id;
    const data = await profileAPI.saveProfile(profile);

    if (data.resultCode === okResult) {
      if (userId !== null) {
        dispatch(getUserProfile(userId));
      } else {
        throw new Error("userId can't be null");
      }
    } else {
      // eslint-disable-next-line @typescript-eslint/no-magic-numbers
      dispatch(stopSubmit('edit-profile', { _error: data.messages[0] }));
      // eslint-disable-next-line @typescript-eslint/no-magic-numbers
      return Promise.reject(data.messages[0]);
    }
  };
