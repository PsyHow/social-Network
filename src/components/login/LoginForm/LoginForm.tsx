import React from 'react';

import { Field, InjectedFormProps, reduxForm } from 'redux-form';

import styles from '../../common/FormsControl/FormsControl.module.css';

import { Input } from 'components';
import { required } from 'utils';

const LoginForm = ({ handleSubmit, error }: InjectedFormProps<LoginFormDataType>) => (
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
    {error && <div className={styles.formSummaryError}>{error}</div>}
    <div>
      <button type="submit">Login</button>
    </div>
  </form>
);

export const LoginReduxForm = reduxForm<LoginFormDataType>({ form: 'login' })(LoginForm);

// types
export type LoginFormDataType = {
  email: string;
  password: string;
  rememberMe: boolean;
};
