import React                 from "react";
import { Field, reduxForm }  from "redux-form";
import { InjectedFormProps } from 'redux-form';

type FormDataType = {
    login: string
    password: string
    rememberMe: boolean
}

export const Login = () => {

    const onSubmit = (formData: FormDataType) => {
        console.log( formData )
    }

    return <div>
        <h1>Login</h1>
        {/*<ReactForm/>*/}
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
};

const LoginForm = (props: InjectedFormProps<FormDataType>) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field component={'input'} name={'login'} placeholder={'login'}/>
        </div>
        <div>
            <Field component={'input'} name={'password'} placeholder={'password'}/>
        </div>
        <div>
            <Field component={'input'} type={'checkbox'} name={'rememberMe'} placeholder={'remember me'}/>
        </div>
        <div>
            <button>Login</button>
        </div>
    </form>
}

const LoginReduxForm = reduxForm<FormDataType>( { form: 'login' } )( LoginForm )
