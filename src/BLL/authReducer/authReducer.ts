import { InitialStateType, SetUserDataACType } from 'BLL/authReducer/Types';
import { Nullable } from 'types/Nullable';

export const initialState = {
  id: null as Nullable<number>,
  email: null as Nullable<string>,
  login: null as Nullable<string>,
  isAuth: false,
};

export const authReducer = (
  state = initialState,
  action: SetUserDataACType,
): InitialStateType => {
  switch (action.type) {
    case 'AUTH/SET_USER_DATA':
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};
