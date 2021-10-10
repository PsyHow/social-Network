import {v1} from "uuid";

type ChangeMessageActionTextType = {
    type: 'CHANGE-MESSAGE-TEXT'
    newMessageText: string
}
type SendMessageActionType = {
    type: 'SEND-MESSAGE'
}
type DialogsPageActionType = ChangeMessageActionTextType | SendMessageActionType

const CHANGE_MESSAGE_TEXT = 'CHANGE-MESSAGE-TEXT';
const SEND_MESSAGE = 'SEND-MESSAGE';

export type DialogsType = {
    id:string,
    name:string
}
export type MessagesType = {
    id:string,
    message:string
}

const initialState = {
    dialogs: [
        {id: v1(), name: 'Roman'},
        {id: v1(), name: 'Romazan'},
        {id: v1(), name: 'Diyar'},
        {id: v1(), name: 'Ilyas'},
        {id: v1(), name: 'Viktor'}
    ] as Array<DialogsType>,
    messages: [
        {id: v1(), message: 'Hi'},
        {id: v1(), message: 'Hello'},
        {id: v1(), message: 'Yopta'},
        {id: v1(), message: 'Ku'},
        {id: v1(), message: 'Cho kogo?'}
    ] as Array<MessagesType>,
    newMessageText: ''

}
type InitialStateType = typeof initialState

const dialogsReducer = (state:InitialStateType = initialState, action: DialogsPageActionType) :InitialStateType => {

    switch (action.type) {
        case CHANGE_MESSAGE_TEXT :
            return {...state, newMessageText: action.newMessageText}
        case SEND_MESSAGE :
            /*const newMessage: MessagesType = {id: 6, message: state.newMessageText}
            state.messages.push(newMessage)*/
            //const newMessage = state.newMessageText
            return {...state, newMessageText: '', messages: [...state.messages,{id: v1(), message: state.newMessageText}]}
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