import {
    onChangeMessage,
    DialogsType,
    MessagesType,
    sendMessage
} from "../../Redux/dialogsReducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType} from "../../Redux/redux-store";


type MapStateToPropsType = {
    dialogs: DialogsType[]
    messages: MessagesType[]
    newMessageText: string
    isAuth:boolean
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
        newMessageText: state.dialogsPage.newMessageText,
        isAuth: state.auth.isAuth
    }
}

export const DialogsContainer = connect(mapStateToProps, {
    sendMessage,
    onChangeMessage

})(Dialogs)
