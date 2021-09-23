import React, {ChangeEvent} from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {
    ActionsType,
    addPostActionCreator,
    changePostTextActionCreator,
    RootStateType,
    StoreType
} from "../../../Redux/State";

type propsType = {
    store:StoreType
    postText:string
    dispatch: (action: ActionsType) => void
}



const MyPost = (props: propsType) => {
    let myPosts = props.store._state.profilePage.post.map(p => <Post message={p.message} likescount={p.likesCount}/>)



    const addPostHandler = () => {
        props.dispatch(addPostActionCreator())
        props.dispatch(changePostTextActionCreator(''))
        }


    const onPostChange = (event:ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch(changePostTextActionCreator(props.postText))
        props.dispatch(changePostTextActionCreator(event.currentTarget.value))
    }

    return (
        <div>
            <div className={s.postsBlock}>
                <h3>my posts</h3>
            </div>
            <div>
                <textarea value={props.postText}
                            onChange={onPostChange}/>
            </div>
            <div>
                <button onClick={addPostHandler}>Send post</button>
            </div>
            <div className={s.posts}>
                {myPosts}
            </div>

        </div>

    )
}
export default MyPost;