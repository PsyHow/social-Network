import { Field, InjectedFormProps, reduxForm } from "redux-form";
import { TextArea } from "../../common/FormsControl/FormsControl";
import { maxLengthCreator, required } from "../../../utils/validators/validators";
import React from "react";


const maxLength = maxLengthCreator(50)

const AddMessageFormC = (props: InjectedFormProps<FormDialogsDataType>) => {

    return <>
        <form onSubmit={ props.handleSubmit }>
            <div>
                <Field component={ TextArea }
                       name={ "newMessageBody" }
                       placeholder={ "Enter your message" }
                       validate={ [required, maxLength] }/>
            </div>
            <div>
                <button>send</button>
            </div>
        </form>
    </>
}

export const AddMessageForm = reduxForm<FormDialogsDataType>
({ form: "dialogAddMessageForm" })
(AddMessageFormC)

//types
export type FormDialogsDataType = {
    newMessageBody: string
}