import { FC } from 'react';

import { WrappedFieldProps } from 'redux-form';
import { WrappedFieldMetaProps } from 'redux-form/lib/Field';

import style from './FormsControl.module.css';

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

// types
type FormControlPropsType = {
  meta: WrappedFieldMetaProps;
};
