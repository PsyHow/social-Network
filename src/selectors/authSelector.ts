import { AppStateType } from 'BLL';

export const selectIsAuth = (state: AppStateType) => state.auth.isAuth;
export const selectLogin = (state: AppStateType) => state.auth.login;
export const selectAuthID = (state: AppStateType) => state.auth.id;
