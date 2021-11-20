import { v1 } from "uuid";

type SendMessageActionType = {
    type: 'SEND-MESSAGE',
    newMessageBody: string
}
type DialogsPageActionType = SendMessageActionType

const SEND_MESSAGE = 'SEND-MESSAGE';

export type DialogsType = {
    id: string,
    name: string
}
export type MessagesType = {
    id: string,
    message: string
}

const initialState = {
    dialogs: [
        { id: v1(), name: 'Roman' },
        { id: v1(), name: 'Romazan' },
        { id: v1(), name: 'Diyar' },
        { id: v1(), name: 'Ilyas' },
        { id: v1(), name: 'Viktor' },
    ] as Array<DialogsType>,
    messages: [
        { id: v1(), message: 'Hi' },
        { id: v1(), message: 'Hello' },
        { id: v1(), message: 'Yopta' },
        { id: v1(), message: 'Ku' },
        { id: v1(), message: 'Cho kogo?' },
    ] as Array<MessagesType>,

}
type InitialStateType = typeof initialState

const dialogsReducer = (state: InitialStateType = initialState, action: DialogsPageActionType): InitialStateType => {

    switch (action.type) {
        case SEND_MESSAGE :
            return {
                ...state,
                messages: [...state.messages, { id: v1(), message: action.newMessageBody }],
            }
        default:
            return state
    }
}

export const sendMessage = (newMessageBody: string): SendMessageActionType => {
    return {
        type: SEND_MESSAGE,
        newMessageBody,
    }
}

export default dialogsReducer;