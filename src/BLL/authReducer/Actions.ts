import { Nullable } from 'types';

export const setAuthUserData = (
  id: Nullable<number>,
  email: Nullable<string>,
  login: Nullable<string>,
  isAuth: boolean,
) => ({ type: 'AUTH/SET_USER_DATA', payload: { id, email, login, isAuth } });
