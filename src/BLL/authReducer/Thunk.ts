import { stopSubmit } from 'redux-form';

import { authAPI, securityAPI } from 'api/Api';
import { getCaptchaUrlSuccess, setAuthUserData } from 'BLL/authReducer/Actions';
import { AppThunkType } from 'BLL/redux-store';
import { badResult, okResult } from 'constants/constants';

export const getAuthUserData = (): AppThunkType => async dispatch => {
  const response = await authAPI.authMe();

  if (response.resultCode === okResult) {
    const { email, login, id } = response.data;
    dispatch(setAuthUserData(id, email, login, true));
  }
};

export const getCaptchaUrl = (): AppThunkType => async dispatch => {
  const data = await securityAPI.getCaptchaUrl();
  const captchaUrl = data.url;
  dispatch(getCaptchaUrlSuccess(captchaUrl));
};

export const login =
  (email: string, password: string, rememberMe: boolean, captcha: string): AppThunkType =>
  async dispatch => {
    const response = await authAPI.login(email, password, rememberMe, captcha);
    const zeroNumber = 0;

    if (response.data.resultCode === okResult) {
      dispatch(getAuthUserData());
    } else {
      if (response.data.resultCode === badResult) {
        dispatch(getCaptchaUrl());
      }
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
