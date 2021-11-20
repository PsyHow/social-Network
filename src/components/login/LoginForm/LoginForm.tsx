import { Field, InjectedFormProps, reduxForm } from "redux-form";
import { Input }                               from "../../common/FormsControl/FormsControl";
import { required }                            from "../../../utils/validators/validators";
import React                                   from "react";

export type LoginFormDataType = {
    login: string
    password: string
    rememberMe: boolean
}

const LoginForm = (props: InjectedFormProps<LoginFormDataType>) => {
    return <form onSubmit={ props.handleSubmit }>
        <div>
            <Field component={ Input }
                   validate={ [required] }
                   name={ 'login' }
                   placeholder={ 'login' }/>
        </div>
        <div>
            <Field component={ Input }
                   validate={ [required] }
                   name={ 'password' }
                   placeholder={ 'password' }/>
        </div>
        <div>
            <Field component={ Input } type={ 'checkbox' } name={ 'rememberMe' } placeholder={ 'remember me' }/>
        </div>
        <div>
            <button>Login</button>
        </div>
    </form>
}

export const LoginReduxForm = reduxForm<LoginFormDataType>({ form: 'login' })(LoginForm)