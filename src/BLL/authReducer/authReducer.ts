import { InitialStateType, SetUserDataACType } from 'BLL/authReducer/Types';
import { Nullable } from 'types';

export const initialState = {
  id: null as Nullable<number>,
  email: null as Nullable<string>,
  login: null as Nullable<string>,
  isAuth: false,
  captchaUrl: null as Nullable<string>,
};

export const authReducer = (
  state = initialState,
  action: SetUserDataACType,
): InitialStateType => {
  switch (action.type) {
    case 'AUTH/SET_USER_DATA':
    case 'AUTH/GET_CAPTCHA_URL_SUCCESS':
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};
