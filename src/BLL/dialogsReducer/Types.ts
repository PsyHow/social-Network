import { sendMessage } from 'BLL/dialogsReducer/Actions';
import { initialState } from 'BLL/dialogsReducer/dialogsReducer';

export type DialogsPageActionType = ReturnType<typeof sendMessage>;
export type InitialStateType = typeof initialState;
