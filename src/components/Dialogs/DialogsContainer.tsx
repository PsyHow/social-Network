import React, {ChangeEvent} from "react";
import { changeMessageTextActionCreator, sendMessageTextActionCreator} from "../../Redux/dialogsReducer";
import {StoreType} from "../../Redux/redux-store";
import {Dialogs} from "./Dialogs";
type propsType = {
    store: StoreType
}


export const DialogsContainer = (props: propsType) => {


    const sendMessage = () => {
        props.store.dispatch(sendMessageTextActionCreator())
        props.store.dispatch(changeMessageTextActionCreator(''))
    }

    const onChangeHandler = (event:ChangeEvent<HTMLTextAreaElement>) => {
        props.store.dispatch(changeMessageTextActionCreator(props.store.getState().dialogsReducer.newMessageText))
        props.store.dispatch(changeMessageTextActionCreator(event.currentTarget.value))
    }

    return (
        <Dialogs sendMessage={sendMessage}
        onChangeMessage={onChangeHandler}
        dialogs={props.store.getState().dialogsReducer.dialogs}
        messages={props.store.getState().dialogsReducer.messages}
        newMessageText={props.store.getState().dialogsReducer.newMessageText}/>
    )
}
