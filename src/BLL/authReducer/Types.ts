import { setAuthUserData } from './Actions';

import { initialState } from 'BLL/authReducer/authReducer';

export type SetUserDataACType = ReturnType<typeof setAuthUserData>;
export type InitialStateType = typeof initialState;
