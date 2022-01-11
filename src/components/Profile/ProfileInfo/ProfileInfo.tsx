import { ChangeEvent, FC, useState } from 'react';

import profileImg from '../../../assets/images/338-3388366_meme-for-steam-avatars-hd-png-download.png';

import styles from './ProfileInfo.module.css';
import { ProfileStatusWithHooks } from './ProfileStatusWithHook';

import { Preloader } from 'components';
import ProfileDataForm from 'components/Profile/ProfileInfo/ProfileDataForm';
import { ContactsType, Nullable, UserProfileType } from 'types';

export const Contact = ({ contactTitle, contactValue }: ContactPropsType) => (
  <div className={styles.contacts}>
    <b>{contactTitle}</b>
    {contactValue}
  </div>
);

const ProfileData: FC<ProfileDataProps> = ({ profile, isOwner, goToEditMode }) => (
  <div>
    {isOwner && (
      <div>
        <button type="button" onClick={goToEditMode}>
          edit
        </button>
      </div>
    )}
    <div>
      <b>Full Name: </b> {profile.fullName}
    </div>
    <div>
      <b>Looking for a job:</b> {profile.lookingForAJob ? 'yes' : 'no'}
    </div>
    {profile.lookingForAJob && (
      <div>
        <b>My professional skills: </b> {profile.lookingForAJobDescription}
      </div>
    )}
    <div>
      <b>About me: </b> {profile.aboutMe}
    </div>
    <div>
      <b>Contacts:</b>{' '}
      {Object.keys(profile.contacts).map(key => (
        <Contact
          key={key}
          contactTitle={key}
          contactValue={profile.contacts[key as keyof ContactsType]}
        />
      ))}
    </div>
  </div>
);

export const ProfileInfo: FC<PropsType> = ({
  status,
  profile,
  updateStatus,
  isOwner,
  savePhoto,
  saveProfile,
}) => {
  const [editMode, setEditMode] = useState<boolean>(false);

  if (!profile) {
    return <Preloader />;
  }

  const onMainPhotoSelected = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length) {
      // eslint-disable-next-line @typescript-eslint/no-magic-numbers
      savePhoto(event.target.files[0]);
    }
  };

  const onSubmit = (formData: UserProfileType) => {
    saveProfile(formData).then(() => {
      setEditMode(false);
    });
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.description}>
        <div className={styles.info}>
          <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />

          {editMode ? (
            <ProfileDataForm
              initialValues={profile}
              onSubmit={onSubmit}
              profile={profile}
            />
          ) : (
            <ProfileData
              profile={profile}
              isOwner={isOwner}
              goToEditMode={() => setEditMode(true)}
            />
          )}
        </div>
      </div>
      <div className={styles.ava}>
        <div className={styles.img}>
          {isOwner && <input type="file" onChange={onMainPhotoSelected} />}
          <img alt="avatar" src={profile.photos.large || profileImg} />
        </div>
      </div>
    </div>
  );
};

// types
type PropsType = {
  profile: Nullable<UserProfileType>;
  status: string;
  updateStatus: (status: string) => void;
  isOwner: boolean;
  savePhoto: (file: File) => void;
  saveProfile: (profile: UserProfileType) => Promise<any>;
};

type ContactPropsType = {
  contactTitle: string;
  contactValue: string;
};

type ProfileDataProps = {
  profile: UserProfileType;
  isOwner: boolean;
  goToEditMode: () => void;
};
