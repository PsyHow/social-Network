import React, { FC } from 'react';

import { Field, InjectedFormProps, reduxForm } from 'redux-form';

import styles from '../../common/FormsControl/FormsControl.module.css';

import { Input } from 'components';
import { createField } from 'components/common/FormsControl/FormsControl';
import { Nullable } from 'types';
import { required } from 'utils';

const LoginForm: FC<
  InjectedFormProps<LoginFormDataType, LoginFormOwnTypes> & LoginFormOwnTypes
> = ({ handleSubmit, error, captchaUrl }) => (
  <form onSubmit={handleSubmit}>
    <div>
      <Field component={Input} validate={[required]} name="email" placeholder="Email" />
    </div>
    <div>
      <Field
        component={Input}
        validate={[required]}
        name="password"
        type="password"
        placeholder="password"
      />
    </div>
    <div>
      <Field component={Input} type="checkbox" name="rememberMe" />
      Remember me
    </div>
    {captchaUrl && <img alt="captcha" src={captchaUrl} />}
    {captchaUrl && createField('Symbols from image', 'captcha', [required], Input)}

    {error && <div className={styles.formSummaryError}>{error}</div>}
    <div>
      <button type="submit">Login</button>
    </div>
  </form>
);

export const LoginReduxForm = reduxForm<LoginFormDataType, LoginFormOwnTypes>({
  form: 'login',
})(LoginForm);

// types
export type LoginFormDataType = {
  email: string;
  password: string;
  rememberMe: boolean;
  captcha: string;
};

type LoginFormOwnTypes = {
  captchaUrl: Nullable<string>;
};
