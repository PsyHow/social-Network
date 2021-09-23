import React, {ChangeEvent} from "react";
import s from './Dialogs.module.css'
import {DialogsItem} from "./DialogsItem/DialogsItem";
import {Message} from "./Message/Message";
import { changeMessageTextActionCreator, sendMessageTextActionCreator} from "../../Redux/dialogsReducer";
import {ActionsType, StoreType} from "../../Redux/State";
type propsType = {
    state:StoreType
    dispatch:(action: ActionsType)=> void
    messageText: string
}


export const Dialogs = (props: propsType) => {
    let dialogsElements = props.state._state.dialogsPage.dialogs.map(d => <DialogsItem name={d.name} id={d.id}/>)
    let messagesElements = props.state._state.dialogsPage.messages.map(m => <Message message={m.message} id={m.id}/>)



    const sendMessage = () => {
        props.dispatch(sendMessageTextActionCreator())
        props.dispatch(changeMessageTextActionCreator(''))
    }

    const onChangeHandler = (event:ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch(changeMessageTextActionCreator(props.messageText))
        props.dispatch(changeMessageTextActionCreator(event.currentTarget.value))
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
                <div>
                    <textarea value={props.messageText} onChange={onChangeHandler}/>
                </div>
                <div>
                    <button onClick={sendMessage}>send</button>
                </div>
            </div>
        </div>


    )
}
