import React, {ChangeEvent} from "react";
import s from './Dialogs.module.css'
import {DialogsItem} from "./DialogsItem/DialogsItem";
import {Message} from "./Message/Message";
import {DialogsType, MessagesType} from "../../Redux/dialogsReducer";

type propsType = {
    sendMessage:()=>void
    onChangeMessage:(event:ChangeEvent<HTMLTextAreaElement>) =>void
    dialogs:Array<DialogsType>
    messages:Array<MessagesType>
    newMessageText:string
}


export const Dialogs = (props: propsType) => {
    let dialogsElements = props.dialogs.map(d => <DialogsItem key={d.id} name={d.name} id={d.id}/>)
    let messagesElements = props.messages.map(m => <Message key={m.id} message={m.message} id={m.id}/>)



    const sendMessage = () => {
        props.sendMessage()
    }

    const onChangeHandler = (event:ChangeEvent<HTMLTextAreaElement>) => {
        props.onChangeMessage(event)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
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
