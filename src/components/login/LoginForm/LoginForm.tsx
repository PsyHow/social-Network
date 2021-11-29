import { Field, InjectedFormProps, reduxForm } from "redux-form";
import { Input }                               from "../../common/FormsControl/FormsControl";
import { required }                            from "../../../utils/validators/validators";
import React                                   from "react";
import styles                                  from "./../../common/FormsControl/FormsControl.module.css"


const LoginForm = (props: InjectedFormProps<LoginFormDataType>) => {
    return <form onSubmit={ props.handleSubmit }>
        <div>
            <Field component={ Input }
                   validate={ [required] }
                   name={ "email" }
                   placeholder={ "Email" }/>
        </div>
        <div>
            <Field component={ Input }
                   validate={ [required] }
                   name={ "password" }
                   type={ "password" }
                   placeholder={ "password" }/>
        </div>
        <div>
            <Field component={ Input } type={ "checkbox" } name={ "rememberMe" }/>Remember me
        </div>
        { props.error && <div className={ styles.formSummaryError }>
            { props.error }
        </div> }
        <div>
            <button>Login</button>
        </div>
    </form>
}

export const LoginReduxForm = reduxForm<LoginFormDataType>({ form: "login" })(LoginForm)

//types
export type LoginFormDataType = {
    email: string
    password: string
    rememberMe: boolean
}