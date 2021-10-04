import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {MyPostContainer} from "./MyPosts/MyPostContainer";
import s from './Profile.module.css'



const Profile = () => {
    return (
        <div className={s.profileWrapper}>
            <ProfileInfo/>
            <MyPostContainer/>
        </div>
    )
}
export default Profile;