import React from 'react';

import { Field, InjectedFormProps, reduxForm } from 'redux-form';

import { TextArea } from 'components';
import { maxMessageLength } from 'constants/constants';
import { maxLengthCreator, required } from 'utils';

const maxLength = maxLengthCreator(maxMessageLength);
const AddPostFormC = ({ handleSubmit }: InjectedFormProps<FormPostDataType>) => (
  <form onSubmit={handleSubmit}>
    <div>
      <Field
        component={TextArea}
        name="newPostMessage"
        placeholder="Enter your message"
        validate={[required, maxLength]}
      />
    </div>
    <div>
      <button type="submit">Send post</button>
    </div>
  </form>
);

export const AddPostForm = reduxForm<FormPostDataType>({ form: 'PostMessageForm' })(
  AddPostFormC,
);

// types
export type FormPostDataType = {
  newPostMessage: string;
};
