import React                                   from "react";
import styles                                  from './Dialogs.module.css'
import { DialogsItem }                         from "./DialogsItem/DialogsItem";
import { Message }                             from "./Message/Message";
import { DialogsType, MessagesType }           from "../../Redux/dialogsReducer";
import { Field, InjectedFormProps, reduxForm } from "redux-form";

type PropsType = {
    sendMessage: (newMessageBody: string) => void
    dialogs: Array<DialogsType>
    messages: Array<MessagesType>
}


export const Dialogs = (props: PropsType) => {
    const dialogsElements = props.dialogs.map( d => <DialogsItem key={d.id} name={d.name} id={d.id}/> )
    const messagesElements = props.messages.map( m => <Message key={m.id} message={m.message} id={m.id}/> )

    const addNewMessage = (formData: FormDataType) => {
        props.sendMessage( formData.newMessageBody )
    }

    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={styles.messages}>
                <div>{messagesElements}</div>
                <AddMessageReduxForm onSubmit={addNewMessage}/>
            </div>
        </div>


    )
}

type FormDataType = {
    newMessageBody: string
}

const AddMessageForm = (props: InjectedFormProps<FormDataType>) => {
    return <>
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={'textarea'} name={'newMessageBody'} placeholder={'Enter your message'}/>
            </div>
            <div>
                <button>send</button>
            </div>
        </form>
    </>
}

const AddMessageReduxForm = reduxForm<FormDataType>( { form: "dialogAddMessageForm" } )( AddMessageForm )