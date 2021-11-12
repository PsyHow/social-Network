import React, {ChangeEvent} from "react";
import styles from './Dialogs.module.css'
import {DialogsItem} from "./DialogsItem/DialogsItem";
import {Message} from "./Message/Message";
import {DialogsType, MessagesType} from "../../Redux/dialogsReducer";

type PropsType = {
    sendMessage:()=>void
    onChangeMessage:(newMessage:string) =>void
    dialogs:Array<DialogsType>
    messages:Array<MessagesType>
    newMessageText:string
}


export const Dialogs = (props: PropsType) => {
    const dialogsElements = props.dialogs.map(d => <DialogsItem key={d.id} name={d.name} id={d.id}/>)
    const messagesElements = props.messages.map(m => <Message key={m.id} message={m.message} id={m.id}/>)



    const sendMessage = () => {
        props.sendMessage()
    }

    const onChangeHandler = (event:ChangeEvent<HTMLTextAreaElement>) => {
        props.onChangeMessage(event.currentTarget.value)
    }

    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={styles.messages}>
                <div>{messagesElements}</div>
                <div>
                    <textarea value={props.newMessageText} onChange={onChangeHandler}/>
                </div>
                <div>
                    <button onClick={sendMessage}>send</button>
                </div>
            </div>
        </div>


    )
}

