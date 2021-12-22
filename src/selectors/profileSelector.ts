import { AppStateType } from 'BLL';

export const getProfile = (state: AppStateType) => state.profilePage.profile;
export const getProfileStatus = (state: AppStateType) => state.profilePage.status;
