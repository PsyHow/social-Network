import React                                 from "react";
import { LoginFormDataType, LoginReduxForm } from "./LoginForm/LoginForm";


export const Login = () => {

    const onSubmit = (formData: LoginFormDataType) => {
        console.log(formData)
    }

    return <div>
        <h1>Login</h1>
        {/*<ReactForm/>*/ }
        <LoginReduxForm onSubmit={ onSubmit }/>
    </div>
};



