import {
    onChangeMessage,
    DialogsType,
    MessagesType,
    sendMessage
} from "../../Redux/dialogsReducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType} from "../../Redux/redux-store";
import React from "react";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";


type MapStateToPropsType = {
    dialogs: DialogsType[]
    messages: MessagesType[]
    newMessageText: string
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
        newMessageText: state.dialogsPage.newMessageText
    }
}

export const DialogsContainer = withAuthRedirect(connect
(mapStateToProps, {sendMessage, onChangeMessage})
(Dialogs))
