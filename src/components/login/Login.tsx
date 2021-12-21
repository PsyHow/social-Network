import { FC } from 'react';

import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { LoginFormDataType, LoginReduxForm } from './LoginForm/LoginForm';

import { login, logout, AppStateType } from 'BLL';

const Login: FC<LoginPropsType> = ({ login, isAuth }) => {
  const onSubmit = (formData: LoginFormDataType) => {
    login(formData.email, formData.password, formData.rememberMe);
  };

  if (isAuth) {
    return <Redirect to="/profile" />;
  }
  return (
    <div>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  );
};

const MapStateToProps = (state: AppStateType): MapStateToPropsType => ({
  isAuth: state.auth.isAuth,
});

export const LoginContainer = connect(MapStateToProps, { login, logout })(Login);

// types
type MapDispatchToPropsType = {
  login: (email: string, password: string, rememberMe: boolean) => void;
};
type MapStateToPropsType = {
  isAuth: boolean;
};
type LoginPropsType = MapDispatchToPropsType & MapStateToPropsType;
