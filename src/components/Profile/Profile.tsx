import React from 'react';
import s from './Profile.module.css'
import MyPost from './MyPosts/MyPost';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ActionsType} from "../../Redux/state";
import {AppStateType} from "../../Redux/redux-store";

type propsType = {
    state: AppStateType
    dispatch:(action:ActionsType)=> void
}


const Profile = (props: propsType) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPost store={props.state}
            dispatch={props.dispatch}/>
        </div>
    )
}
export default Profile;