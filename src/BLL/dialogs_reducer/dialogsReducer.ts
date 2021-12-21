import { v1 } from 'uuid';

import { DialogsPageActionType, InitialStateType } from 'BLL/dialogs_reducer/Types';
import { DialogsType, MessagesType } from 'types/types';

export const initialState = {
  dialogs: [
    { id: v1(), name: 'Roman' },
    { id: v1(), name: 'Romazan' },
    { id: v1(), name: 'Diyar' },
    { id: v1(), name: 'Ilyas' },
    { id: v1(), name: 'Viktor' },
  ] as DialogsType[],
  messages: [
    { id: v1(), message: 'Hi' },
    { id: v1(), message: 'Hello' },
    { id: v1(), message: 'How are you?' },
    { id: v1(), message: 'Awesome' },
    { id: v1(), message: "What's new ?" },
  ] as MessagesType[],
};

export const dialogsReducer = (
  state = initialState,
  action: DialogsPageActionType,
): InitialStateType => {
  switch (action.type) {
    case 'DIALOGS/SEND_MESSAGE':
      return {
        ...state,
        messages: [...state.messages, { id: v1(), message: action.newMessageBody }],
      };
    default:
      return state;
  }
};
