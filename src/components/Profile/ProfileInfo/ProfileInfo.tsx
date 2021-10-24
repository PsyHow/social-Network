import React from 'react';
import styles from './ProfileInfo.module.css'
import {UserProfileType} from "../../../Redux/profileReducer";
import {Preloader} from "../../common/preloader/Preloader";

type PropsType = {
    profile: null | UserProfileType
}

const ProfileInfo = (props:PropsType) => {

    if(!props.profile) {
        return <Preloader/>
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.description}>
                <div className={styles.info}>
                    <h3>FirstName : <span>Viktor</span></h3>
                    <h3>LastName : <span>Burnyshev</span></h3>
                    <h3>Gender : <span>Male</span></h3>
                    <h3>Email Address : <a href={"merzkiy.com"}>merzkiy.com</a></h3>
                </div>
            </div>
            <div className={styles.ava}>
                <div className={styles.img}>
                    <img src={props.profile.photos.large}/>
                    <img  src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpQppfBCwxxoQg3WctXTif09_hUrdIItPqnA&usqp=CAU'}/>
                </div>

            </div>
        </div>
    )
}

export default ProfileInfo;

