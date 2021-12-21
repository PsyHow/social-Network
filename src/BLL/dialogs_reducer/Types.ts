import { sendMessage } from 'BLL/dialogs_reducer/Actions';
import { initialState } from 'BLL/dialogs_reducer/dialogsReducer';

export type DialogsPageActionType = ReturnType<typeof sendMessage>;
export type InitialStateType = typeof initialState;
