import { initializedSuccess } from 'BLL/appReducer/Actions';
import { initialState } from 'BLL/appReducer/appReducer';

export type InitialStateType = typeof initialState;
export type AppActionType = ReturnType<typeof initializedSuccess>;
