import {
    changeMessageTextActionCreator,
    DialogsType,
    MessagesType,
    sendMessageTextActionCreator
} from "../../Redux/dialogsReducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType} from "../../Redux/redux-store";
import {Dispatch} from 'redux'



type MapStateToPropsType = {
    dialogs: DialogsType[]
    messages: MessagesType[]
    newMessageText: string
}

type mapDispatchToProps = {
    sendMessage: () => void
    onChangeMessage: (newMessage:string) => void
}

let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
        newMessageText: state.dialogsPage.newMessageText
    }
}
let mapDispatchToProps = (dispatch: Dispatch) : mapDispatchToProps => {
    return {
        sendMessage: () => {
            dispatch(sendMessageTextActionCreator())
        },
        onChangeMessage: (newMessage:string) => {
            dispatch(changeMessageTextActionCreator(newMessage))
        }
    }
}

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)
