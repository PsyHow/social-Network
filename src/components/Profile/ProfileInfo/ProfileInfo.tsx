import React, {useState} from 'react';
import styles from './ProfileInfo.module.css'
import {UserProfileType} from "../../../Redux/profileReducer";
import {Preloader} from "../../common/preloader/Preloader";
import ProfileStatus from './ProfileStatus';

type PropsType = {
    profile: null | UserProfileType
    status: string
    updateStatus: (status: string) => void
}

const ProfileInfo = (props: PropsType) => {

    const [toggle, setToggle] = useState<boolean>(true)

    if (!props.profile) {
        return <Preloader/>
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.description}>
                <div className={styles.info}>
                    <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
                    <h3>FirstName : <span>{null ? 'Viktor' : props.profile.fullName}</span></h3>
                    <h3>Looking for a job : <span>{props.profile.lookingForAJob ? 'Yes' : 'No'}</span></h3>
                    <h3>looking For A Job Description : <span>{props.profile.lookingForAJobDescription}</span></h3>
                </div>
                <div onClick={() => setToggle(!toggle)}>Toggle{toggle ? '' :
                    <div className={styles.toggle}>
                        <span>Git: {props.profile.contacts.github}</span>
                        <span>VK: {props.profile.contacts.vk}</span>
                        <span>FaceBook: {props.profile.contacts.facebook}</span>
                        <span>Twitter: {props.profile.contacts.twitter}</span>
                        <span>Instagram: {props.profile.contacts.instagram}</span>
                        <span>MainLink: {props.profile.contacts.mainLink}</span>
                        <span>Website: {props.profile.contacts.website}</span>
                        <span>YouTube: {props.profile.contacts.youtube}</span>
                    </div>
                }</div>
            </div>
            <div className={styles.ava}>
                <div className={styles.img}>
                    <img
                        src={props.profile.photos.large || 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpQppfBCwxxoQg3WctXTif09_hUrdIItPqnA&usqp=CAU'}/>
                    {/*<img  src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpQppfBCwxxoQg3WctXTif09_hUrdIItPqnA&usqp=CAU'}/>*/}
                </div>

            </div>
        </div>
    )
}

export default ProfileInfo;

