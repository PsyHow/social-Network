import { FC } from 'react';

import { MyPostContainer } from './MyPosts/MyPostContainer';
import styles from './Profile.module.css';
import { ProfileInfo } from './ProfileInfo/ProfileInfo';

import { Nullable, UserProfileType } from 'types';

export const Profile: FC<PropsType> = ({
  profile,
  status,
  updateStatus,
  isOwner,
  savePhoto,
}) => (
  <div className={styles.profileWrapper}>
    <ProfileInfo
      isOwner={isOwner}
      profile={profile}
      status={status}
      updateStatus={updateStatus}
      savePhoto={savePhoto}
    />
    <MyPostContainer />
  </div>
);

// types
type PropsType = {
  profile: Nullable<UserProfileType>;
  status: string;
  updateStatus: (status: string) => void;
  isOwner: boolean;
  savePhoto: (file: File) => void;
};
