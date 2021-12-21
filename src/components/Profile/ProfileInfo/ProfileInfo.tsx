import { FC, useState } from 'react';

import styles from './ProfileInfo.module.css';
import { ProfileStatusWithHooks } from './ProfileStatusWithHook';

import { Preloader } from 'components';
import { Nullable, UserProfileType } from 'types';

export const ProfileInfo: FC<PropsType> = ({ status, profile, updateStatus }) => {
  const [toggle, setToggle] = useState<boolean>(true);

  if (!profile) {
    return <Preloader />;
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.description}>
        <div className={styles.info}>
          <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
          <h3>
            FirstName : <span>{null ? 'Viktor' : profile.fullName}</span>
          </h3>
          <h3>
            Looking for a job : <span>{profile.lookingForAJob ? 'Yes' : 'No'}</span>
          </h3>
          <h3>
            looking For A Job Description :{' '}
            <span>{profile.lookingForAJobDescription}</span>
          </h3>
        </div>
        {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
        <div onClick={() => setToggle(!toggle)}>
          Toggle
          {toggle ? (
            ''
          ) : (
            <div className={styles.toggle}>
              <span>Git: {profile.contacts.github}</span>
              <span>VK: {profile.contacts.vk}</span>
              <span>FaceBook: {profile.contacts.facebook}</span>
              <span>Twitter: {profile.contacts.twitter}</span>
              <span>Instagram: {profile.contacts.instagram}</span>
              <span>MainLink: {profile.contacts.mainLink}</span>
              <span>Website: {profile.contacts.website}</span>
              <span>YouTube: {profile.contacts.youtube}</span>
            </div>
          )}
        </div>
      </div>
      <div className={styles.ava}>
        <div className={styles.img}>
          <img
            alt="avatar"
            src={
              profile.photos.large ||
              'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpQppfBCwxxoQg3WctXTif09_hUrdIItPqnA&usqp=CAU'
            }
          />
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
};
