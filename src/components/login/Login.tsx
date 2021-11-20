import React                                 from "react";
import { connect }                           from "react-redux";
import { LoginFormDataType, LoginReduxForm } from "./LoginForm/LoginForm";
import { login, logout }                     from "../../Redux/authReducer";
import { AppStateType }                      from "../../Redux/redux-store";
import { Redirect }                          from "react-router-dom";

type MapDispatchToPropsType = {
    login: (email: string, password: string, rememberMe: boolean) => void
    logout: () => void
}
type MapStateToPropsType = {
    isAuth: boolean
}
type LoginPropsType = MapDispatchToPropsType & MapStateToPropsType

const MapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return { isAuth: state.auth.isAuth }
}

const Login = (props: LoginPropsType) => {

    const onSubmit = (formData: LoginFormDataType) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    }

    if(props.isAuth) {
        return <Redirect to={ '/profile' }/>
    }
    return <div>
        <h1>Login</h1>
        {/*<ReactForm/>*/ }
        <LoginReduxForm onSubmit={ onSubmit }/>
    </div>
};

export default connect(MapStateToProps, { login, logout })(Login)


