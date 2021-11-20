import React                                        from "react";
import styles                                       from './Dialogs.module.css'
import { DialogsItem }                              from "./DialogsItem/DialogsItem";
import { Message }                                  from "./Message/Message";
import { DialogsType, MessagesType }           from "../../Redux/dialogsReducer";
import { AddMessageForm, FormDialogsDataType } from "./AddMessageForm/AddMessageForm";

type PropsType = {
    sendMessage: ( newMessageBody: string ) => void
    dialogs: Array<DialogsType>
    messages: Array<MessagesType>
}


export const Dialogs = ( props: PropsType ) => {
    const dialogsElements = props.dialogs.map( d => <DialogsItem key={ d.id } name={ d.name } id={ d.id }/> )
    const messagesElements = props.messages.map( m => <Message key={ m.id } message={ m.message } id={ m.id }/> )

    const addNewMessage = ( formData: FormDialogsDataType ) => {
        props.sendMessage( formData.newMessageBody )
    }

    return (
        <div className={ styles.dialogs }>
            <div className={ styles.dialogsItems }>
                { dialogsElements }
            </div>
            <div className={ styles.messages }>
                <div>{ messagesElements }</div>
                <AddMessageForm onSubmit={ addNewMessage }/>
            </div>
        </div>
    )
}




