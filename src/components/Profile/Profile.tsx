import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ActionsType} from "../../Redux/state";
import {StoreType} from "../../Redux/redux-store";
import {MyPostContainer} from "./MyPosts/MyPostContainer";

type propsType = {
    store: StoreType
}


const Profile = (props: propsType) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPostContainer store={props.store}/>
        </div>
    )
}
export default Profile;