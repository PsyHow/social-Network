import React, { FC } from 'react';

import { InjectedFormProps, reduxForm } from 'redux-form';

import style from './ProfileInfo.module.css';

import {
  createField,
  GetStringKeys,
  Input,
  TextArea,
} from 'components/common/FormsControl/FormsControl';
import styles from 'components/common/FormsControl/FormsControl.module.css';
import { UserProfileType } from 'types';

type ProfileTypeKeys = GetStringKeys<UserProfileType>;

type PropsType = {
  profile: UserProfileType;
};

const ProfileDataForm: FC<InjectedFormProps<UserProfileType, PropsType> & PropsType> = ({
  handleSubmit,
  profile,
  error,
}) => (
  <form onSubmit={handleSubmit}>
    <div>
      <button type="submit">save</button>
    </div>
    {error && <div className={styles.formSummaryError}>{error}</div>}
    <div>
      <b>Full Name: </b>
      {createField<ProfileTypeKeys>('Full Name', 'fullName', [], Input)}
    </div>
    <div>
      <b>Looking for a job:</b>
      {createField<ProfileTypeKeys>('', 'lookingForAJob', [], Input, {
        type: 'checkbox',
      })}
    </div>
    <div>
      <b>My professional skills: </b>
      {createField<ProfileTypeKeys>(
        'My skills',
        'lookingForAJobDescription',
        [],
        TextArea,
      )}
    </div>
    <div>
      <b>About me: </b>
      {createField<ProfileTypeKeys>('About me', 'aboutMe', [], TextArea)}
    </div>
    <div>
      <b>Contacts</b>:{' '}
      {Object.keys(profile.contacts).map(key => (
        <div key={key} className={style.contact}>
          <b>
            {key}: {createField(key, `contacts.${key}`, [], Input)}
          </b>
        </div>
      ))}
    </div>
  </form>
);

const ProfileDataFormReduxForm = reduxForm<UserProfileType, PropsType>({
  form: 'edit-profile',
})(ProfileDataForm);

export default ProfileDataFormReduxForm;
