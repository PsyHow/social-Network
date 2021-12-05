import React from "react";
import style from "./Dialogs.module.css"
import { DialogsItem } from "./DialogsItem/DialogsItem";
import { Message } from "./Message/Message";
import { AddMessageForm, FormDialogsDataType } from "./AddMessageForm/AddMessageForm";
import { DialogsType, MessagesType } from "../../types/types";


export const Dialogs = (props: PropsType) => {

    const { sendMessage, dialogs, messages } = props

    const dialogsElements = dialogs.map(dialog => <DialogsItem key={ dialog.id } name={ dialog.name }
                                                               id={ dialog.id }/>)

    const messagesElements = messages.map(message => <Message key={ message.id } message={ message.message }
                                                              id={ message.id }/>)

    const addNewMessage = (formData: FormDialogsDataType) => {
        sendMessage(formData.newMessageBody)
    }

    return (
        <div className={ style.dialogs }>
            <div className={ style.dialogsItems }>
                { dialogsElements }
            </div>
            <div className={ style.messages }>
                <div>{ messagesElements }</div>
                <AddMessageForm onSubmit={ addNewMessage }/>
            </div>
        </div>
    )
}

//types
type PropsType = {
    sendMessage: (newMessageBody: string) => void
    dialogs: Array<DialogsType>
    messages: Array<MessagesType>
}




