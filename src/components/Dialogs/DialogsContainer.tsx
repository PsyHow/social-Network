import React, {ChangeEvent} from "react";
import {changeMessageTextActionCreator, sendMessageTextActionCreator} from "../../Redux/dialogsReducer";
import {Dialogs} from "./Dialogs";
import {StoreContext} from "../../StoreContext";


export const DialogsContainer = () => {
    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    const sendMessage = () => {
                        store.dispatch(sendMessageTextActionCreator())
                        store.dispatch(changeMessageTextActionCreator(''))
                    }

                    const onChangeHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
                        store.dispatch(changeMessageTextActionCreator(store.getState().dialogsReducer.newMessageText))
                        store.dispatch(changeMessageTextActionCreator(event.currentTarget.value))
                    }

                    return (
                        <Dialogs sendMessage={sendMessage}
                                 onChangeMessage={onChangeHandler}
                                 dialogs={store.getState().dialogsReducer.dialogs}
                                 messages={store.getState().dialogsReducer.messages}
                                 newMessageText={store.getState().dialogsReducer.newMessageText}/>
                    )
                }
            }
        </StoreContext.Consumer>
    )


}
