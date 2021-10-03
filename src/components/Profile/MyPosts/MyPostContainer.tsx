import React, {ChangeEvent} from 'react';
import {addPostActionCreator, changePostTextActionCreator,} from "../../../Redux/profileReducer";
import MyPost from "./MyPost";
import {StoreContext} from "../../../StoreContext";


export const MyPostContainer = () => {
    return (
        <StoreContext.Consumer>
            {
                store => {
                    const addPostHandler = () => {
                        store.dispatch(addPostActionCreator())
                        store.dispatch(changePostTextActionCreator(''))
                    }


                    const onPostChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
                        store.dispatch(changePostTextActionCreator(store.getState().profileReducer.postText))
                        store.dispatch(changePostTextActionCreator(event.currentTarget.value))
                    }

                    return (
                        <MyPost addPost={addPostHandler}
                                postChange={onPostChange}
                                posts={store.getState().profileReducer.post}
                                postText={store.getState().profileReducer.postText}/>
                    )
                }
            }
        </StoreContext.Consumer>
    )


}