import React from "react";
import { ProfileInfo } from "./ProfileInfo/ProfileInfo";
import { MyPostContainer } from "./MyPosts/MyPostContainer";
import styles from "./Profile.module.css"
import { UserProfileType } from "../../types/types";


export const Profile = (props: PropsType) => {

    const { profile, status, updateStatus } = props
    return (
        <div className={ styles.profileWrapper }>
            <ProfileInfo profile={ profile }
                         status={ status }
                         updateStatus={ updateStatus }/>
            <MyPostContainer/>
        </div>
    )
}

//types
type PropsType = {
    profile: null | UserProfileType
    status: string
    updateStatus: (status: string) => void
}
