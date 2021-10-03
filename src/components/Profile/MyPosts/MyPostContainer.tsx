import React, {ChangeEvent} from 'react';
import {addPostActionCreator, changePostTextActionCreator,} from "../../../Redux/profileReducer";
import {StoreType} from "../../../Redux/redux-store";
import MyPost from "./MyPost";


type propsType = {
    store: StoreType
}


export const MyPostContainer = (props: propsType) => {

    const addPostHandler = () => {
        props.store.dispatch(addPostActionCreator())
        props.store.dispatch(changePostTextActionCreator(''))
    }


    const onPostChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        props.store.dispatch(changePostTextActionCreator(props.store.getState().profileReducer.postText))
        props.store.dispatch(changePostTextActionCreator(event.currentTarget.value))
    }

    return (
        <MyPost addPost={addPostHandler}
                postChange={onPostChange}
                posts={props.store.getState().profileReducer.post}
                postText={props.store.getState().profileReducer.postText}/>
    )
}