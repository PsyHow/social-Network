import { AppStateType } from 'BLL';

export const getIsAuth = (state: AppStateType) => state.auth.isAuth;
export const getLogin = (state: AppStateType) => state.auth.login;
export const getAuthID = (state: AppStateType) => state.auth.id;
