import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {MyPostContainer} from "./MyPosts/MyPostContainer";
import styles from './Profile.module.css'



const Profile = () => {
    return (
        <div className={styles.profileWrapper}>
            <ProfileInfo/>
            <MyPostContainer/>
        </div>
    )
}
export default Profile;