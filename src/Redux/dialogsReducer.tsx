import {ActionsType, ChangeMessageActionTextType, SendMessageActionType} from "./state";

const CHANGE_MESSAGE_TEXT = 'CHANGE-MESSAGE-TEXT';
const SEND_MESSAGE = 'SEND-MESSAGE';

type DialogsType = {
    id:number,
    name:string
}
type MessagesType = {
    id:number,
    message:string
}
const initialState = {
    dialogs: [
        {id: 1, name: 'Aliya Sladkaya'},
        {id: 2, name: 'Roman'},
        {id: 3, name: 'Romazan'},
        {id: 4, name: 'Diyar'},
        {id: 5, name: 'Ilyas'},
        {id: 6, name: 'Viktor'}
    ] as Array<DialogsType>,
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'Hello'},
        {id: 3, message: 'Yopta'},
        {id: 4, message: 'Ku'},
        {id: 5, message: 'Cho kogo?'}
    ] as Array<MessagesType>,
    newMessageText: ''

}

export type InitialStateType = typeof initialState

const dialogsReducer = (state:InitialStateType = initialState, action: ActionsType) => {

    switch (action.type) {
        case CHANGE_MESSAGE_TEXT :
            state.newMessageText = action.newMessageText
            return state
    }
    switch (action.type) {
        case SEND_MESSAGE :
            const newMessage: MessagesType = {id: 6, message: state.newMessageText}
            state.messages.push(newMessage)
            return state
        default:
            return state
    }
}

export const changeMessageTextActionCreator = (newMessage: string): ChangeMessageActionTextType => {
    return {
        type: CHANGE_MESSAGE_TEXT,
        newMessageText: newMessage
    }
}
export const sendMessageTextActionCreator = (): SendMessageActionType => {
    return {
        type: SEND_MESSAGE
    }
}

export default dialogsReducer;