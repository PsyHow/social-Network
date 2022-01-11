import { getCaptchaUrlSuccess, setAuthUserData } from './Actions';

import { initialState } from 'BLL/authReducer/authReducer';

export type SetUserDataACType =
  | ReturnType<typeof setAuthUserData>
  | ReturnType<typeof getCaptchaUrlSuccess>;
export type InitialStateType = typeof initialState;
