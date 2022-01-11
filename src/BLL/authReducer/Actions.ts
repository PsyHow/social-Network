import { Nullable } from 'types';

export const setAuthUserData = (
  id: Nullable<number>,
  email: Nullable<string>,
  login: Nullable<string>,
  isAuth: boolean,
) => ({ type: 'AUTH/SET_USER_DATA', payload: { id, email, login, isAuth } } as const);

export const getCaptchaUrlSuccess = (captchaUrl: Nullable<string>) =>
  ({
    type: 'AUTH/GET_CAPTCHA_URL_SUCCESS',
    payload: { captchaUrl },
  } as const);
