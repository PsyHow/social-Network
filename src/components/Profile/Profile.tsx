import React from 'react';
import s from './Profile.module.css'
import MyPost from './MyPosts/MyPost';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ActionsType, RootStateType, StoreType} from "../../Redux/State";

type propsType = {
    store: StoreType
    PostText: string
    dispatch: (action: ActionsType) => void
}


const Profile = (props: propsType) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPost store={props.store}
                    postText={props.store._state.profilePage.postText}
                    dispatch={props.dispatch}/>
        </div>
    )
}
export default Profile;