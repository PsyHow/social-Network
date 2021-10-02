import React, {ChangeEvent} from "react";
import s from './Dialogs.module.css'
import {DialogsItem} from "./DialogsItem/DialogsItem";
import {Message} from "./Message/Message";
import { changeMessageTextActionCreator, sendMessageTextActionCreator} from "../../Redux/dialogsReducer";
import {ActionsType} from "../../Redux/state";
import {AppStateType} from "../../Redux/redux-store";
type propsType = {
    store: AppStateType
    dispatch:(action:ActionsType)=> void
}


export const Dialogs = (props: propsType) => {
    let dialogsElements = props.store.dialogsReducer.dialogs.map(d => <DialogsItem key={d.id} name={d.name} id={d.id}/>)
    let messagesElements = props.store.dialogsReducer.messages.map(m => <Message key={m.id} message={m.message} id={m.id}/>)



    const sendMessage = () => {
        props.dispatch(sendMessageTextActionCreator())
        props.dispatch(changeMessageTextActionCreator(''))
    }

    const onChangeHandler = (event:ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch(changeMessageTextActionCreator(props.store.dialogsReducer.newMessageText))
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
                    <textarea value={props.store.dialogsReducer.newMessageText} onChange={onChangeHandler}/>
                </div>
                <div>
                    <button onClick={sendMessage}>send</button>
                </div>
            </div>
        </div>


    )
}
