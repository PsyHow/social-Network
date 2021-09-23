import React from "react";
import s from './Dialogs.module.css'
import {DialogsItem} from "./DialogsItem/DialogsItem";
import {Message} from "./Message/Message";
import {StoreType} from "../../Redux/State";

type propsType = {
    state:StoreType
}


export const Dialogs = (props: propsType) => {
    //let state = props.state.getState
    let dialogsElements = props.state._state.dialogsPage.dialogs.map(d => <DialogsItem name={d.name} id={d.id}/>)
    let messagesElements = props.state._state.dialogsPage.messages.map(m => <Message message={m.message} id={m.id}/>)

    const messageElements = React.createRef<HTMLTextAreaElement>()

    const sendMessage = () => {
        alert(messageElements.current?.value)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
                <div>
                    <textarea ref={messageElements}></textarea>
                </div>
                <button onClick={sendMessage}>send</button>
            </div>
        </div>


    )
}
