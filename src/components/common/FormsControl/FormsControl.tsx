import { FC } from 'react';

import { Field, WrappedFieldProps } from 'redux-form';
import { WrappedFieldMetaProps } from 'redux-form/lib/Field';

import style from './FormsControl.module.css';

import { FieldValidatorType } from 'utils/validators/validators';

const FormControl: FC<FormControlPropsType> = ({ meta, children }) => {
  const hasError = meta.touched && meta.error;
  return (
    <div className={`${style.formControl} ${hasError ? style.error : ''}`}>
      <div>{children}</div>
      {hasError && <span>{meta.error}</span>}
    </div>
  );
};

export const TextArea: FC<WrappedFieldProps> = props => {
  const { input, ...restProps } = props;
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <FormControl {...props}>
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <textarea {...input} {...restProps} />
    </FormControl>
  );
};

export const Input: FC<WrappedFieldProps> = props => {
  const { input, ...restProps } = props;
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <FormControl {...props}>
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <input {...input} {...restProps} />
    </FormControl>
  );
};

export function createField<FormKeysType extends string>(
  placeholder: string | undefined,
  name: FormKeysType,
  validators: Array<FieldValidatorType>,
  component: FC<WrappedFieldProps>,
  props = {},
  text = '',
) {
  return (
    <div>
      <Field
        placeholder={placeholder}
        name={name}
        validate={validators}
        component={component}
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...props}
      />{' '}
      {text}
    </div>
  );
}

// types
type FormControlPropsType = {
  meta: WrappedFieldMetaProps;
};

export type GetStringKeys<T> = Extract<keyof T, string>;
