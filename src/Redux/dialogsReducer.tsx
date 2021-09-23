import {ActionsType, ChangeMessageActionTextType, dialogsPageType, messagesType, SendMessageActionType} from "./State";

const CHANGE_MESSAGE_TEXT = 'CHANGE-MESSAGE-TEXT';
const SEND_MESSAGE = 'SEND-MESSAGE';

const dialogsReducer = (state: dialogsPageType, action: ActionsType) => {

    switch (action.type) {
        case CHANGE_MESSAGE_TEXT :
            state.newMessageText = action.newMessageText
            return state
    }
    switch (action.type) {
        case SEND_MESSAGE :
            const newMessage: messagesType = {id: 6, message: state.newMessageText}
            state.messages.push(newMessage)
            return state
        default:
            return state
    }
}

export const changeMessageTextActionCreator = (newMessage:string):ChangeMessageActionTextType => {
    return {
        type: CHANGE_MESSAGE_TEXT,
        newMessageText: newMessage
    }
}
export const sendMessageTextActionCreator = ():SendMessageActionType => {
    return {
        type: SEND_MESSAGE
    }
}

export default dialogsReducer;