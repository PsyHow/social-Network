import { FC } from 'react';

import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { LoginFormDataType, LoginReduxForm } from './LoginForm/LoginForm';

import { login, logout, AppStateType } from 'BLL';
import { Nullable } from 'types';

const Login: FC<LoginPropsType> = ({ login, isAuth, captchaUrl }) => {
  const onSubmit = (formData: LoginFormDataType) => {
    login(formData.email, formData.password, formData.rememberMe, formData.captcha);
  };

  if (isAuth) {
    return <Redirect to="/profile" />;
  }
  return (
    <div>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit} captchaUrl={captchaUrl} />
    </div>
  );
};

const MapStateToProps = (state: AppStateType): MapStateToPropsType => ({
  isAuth: state.auth.isAuth,
  captchaUrl: state.auth.captchaUrl,
});

const LoginContainer = connect(MapStateToProps, { login, logout })(Login);

// types
type MapDispatchToPropsType = {
  login: (email: string, password: string, rememberMe: boolean, captcha: string) => void;
};
type MapStateToPropsType = {
  isAuth: boolean;
  captchaUrl: Nullable<string>;
};
type LoginPropsType = MapDispatchToPropsType & MapStateToPropsType;

export default LoginContainer;
