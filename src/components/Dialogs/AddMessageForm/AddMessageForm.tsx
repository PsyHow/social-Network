import { FC } from 'react';

import { Field, InjectedFormProps, reduxForm } from 'redux-form';

import { TextArea } from 'components';
import { maxMessageLength } from 'constants/constants';
import { maxLengthCreator, required } from 'utils';

const maxLength = maxLengthCreator(maxMessageLength);

const AddMessageFormC: FC<InjectedFormProps<FormDialogsDataType>> = ({
  handleSubmit,
}) => (
  <form onSubmit={handleSubmit}>
    <div>
      <Field
        component={TextArea}
        name="newMessageBody"
        placeholder="Enter your message"
        validate={[required, maxLength]}
      />
    </div>
    <div>
      <button type="button">send</button>
    </div>
  </form>
);

export const AddMessageForm = reduxForm<FormDialogsDataType>({
  form: 'dialogAddMessageForm',
})(AddMessageFormC);

// types
export type FormDialogsDataType = {
  newMessageBody: string;
};
