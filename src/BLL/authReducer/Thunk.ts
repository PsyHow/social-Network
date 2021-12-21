import { stopSubmit } from 'redux-form';

import { authAPI } from 'api/Api';
import { setAuthUserData } from 'BLL/authReducer/Actions';
import { AppThunkType } from 'BLL/redux-store';
import { okResult } from 'constants/constants';

export const getAuthUserData = (): AppThunkType => async dispatch => {
  const response = await authAPI.authMe();

  if (response.resultCode === okResult) {
    const { email, login, id } = response.data;
    dispatch(setAuthUserData(id, email, login, true));
  }
};

export const login =
  (email: string, password: string, rememberMe: boolean): AppThunkType =>
  async dispatch => {
    const response = await authAPI.login(email, password, rememberMe);
    const zeroNumber = 0;

    if (response.data.resultCode === okResult) {
      dispatch(getAuthUserData());
    } else {
      const message =
        response.data.messages.length > zeroNumber
          ? response.data.messages[zeroNumber]
          : 'Some Error';
      dispatch(stopSubmit('login', { _error: message }));
    }
  };

export const logout = (): AppThunkType => async dispatch => {
  const response = await authAPI.logout();

  if (response.data.resultCode === okResult) {
    dispatch(setAuthUserData(null, null, null, false));
  }
};
