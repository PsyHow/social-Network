import React from 'react';
import s from './Profile.module.css'
import MyPost from './MyPosts/MyPost';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {RootStateType} from "../../Redux/State";

type propsType = {
    state:RootStateType
    addPost:(postText: string)=>void
    PostText:string
    changePostText:(NewPostText:string)=>void
}


const Profile = (props:propsType) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPost state={props.state}
                    addPost={props.addPost}
                    postText={props.state.profilePage.postText}
                    changePostText={props.changePostText}/>
        </div>
    )
}
export default Profile;