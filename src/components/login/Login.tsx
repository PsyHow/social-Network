import React from "react";
import { connect } from "react-redux";
import { LoginFormDataType, LoginReduxForm } from "./LoginForm/LoginForm";
import { login, logout } from "../../Redux/authReducer";
import { AppStateType } from "../../Redux/redux-store";
import { Redirect } from "react-router-dom";


const Login = (props: LoginPropsType) => {

    const { login, isAuth } = props

    const onSubmit = (formData: LoginFormDataType) => {
        login(formData.email, formData.password, formData.rememberMe)
    }

    if(isAuth) {
        return <Redirect to={ "/profile" }/>
    }
    return <div>
        <h1>Login</h1>
        {/*<ReactForm/>*/ }
        <LoginReduxForm onSubmit={ onSubmit }/>
    </div>
};

const MapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return { isAuth: state.auth.isAuth }
}

export default connect(MapStateToProps, { login, logout })(Login)

//types
type MapDispatchToPropsType = {
    login: (email: string, password: string, rememberMe: boolean) => void
    logout: () => void
}
type MapStateToPropsType = {
    isAuth: boolean
}
type LoginPropsType = MapDispatchToPropsType & MapStateToPropsType


