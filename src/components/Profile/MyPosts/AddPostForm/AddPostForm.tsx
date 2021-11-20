import { maxLengthCreator, required }          from "../../../../utils/validators/validators";
import { Field, InjectedFormProps, reduxForm } from "redux-form";
import { TextArea }                            from "../../../common/FormsControl/FormsControl";
import React                                   from "react";

export type FormPostDataType = {
    newPostMessage: string
}

const maxLength = maxLengthCreator(10)
const AddPostFormC = (props: InjectedFormProps<FormPostDataType>) => {
    return <>
        <form onSubmit={ props.handleSubmit }>
            <div>
                <Field component={ TextArea } name={ 'newPostMessage' } placeholder={ 'Enter your message' }
                       validate={ [required, maxLength] }/>
            </div>
            <div>
                <button>Send post</button>
            </div>
        </form>
    </>
}

export const AddPostForm = reduxForm<FormPostDataType>({ form: 'PostMessageForm' })(AddPostFormC)