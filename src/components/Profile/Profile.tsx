import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {MyPostContainer} from "./MyPosts/MyPostContainer";
import styles from './Profile.module.css'
import {UserProfileType} from "../../Redux/profileReducer";

type PropsType = {
    profile: null | UserProfileType
}

const Profile = (props:PropsType) => {
    return (
        <div className={styles.profileWrapper}>
            <ProfileInfo profile={props.profile}/>
            <MyPostContainer/>
        </div>
    )
}
export default Profile;