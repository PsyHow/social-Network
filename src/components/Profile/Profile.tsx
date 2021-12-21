import { FC } from 'react';

import { MyPostContainer } from './MyPosts/MyPostContainer';
import styles from './Profile.module.css';
import { ProfileInfo } from './ProfileInfo/ProfileInfo';

import { Nullable, UserProfileType } from 'types';

export const Profile: FC<PropsType> = ({ profile, status, updateStatus }) => (
  <div className={styles.profileWrapper}>
    <ProfileInfo profile={profile} status={status} updateStatus={updateStatus} />
    <MyPostContainer />
  </div>
);

// types
type PropsType = {
  profile: Nullable<UserProfileType>;
  status: string;
  updateStatus: (status: string) => void;
};
