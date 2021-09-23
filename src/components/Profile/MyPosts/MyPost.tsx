import React, {ChangeEvent} from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {RootStateType, StoreType} from "../../../Redux/State";

type propsType = {
    state:StoreType
    addPost:(postText: string)=>void
    postText:string
    changePostText:(NewPostText: string)=>void
}

const MyPost = (props: propsType) => {
    let myPosts = props.state._state.profilePage.post.map(p => <Post message={p.message} likescount={p.likesCount}/>)



    const addPostHandler = () => {
            props.addPost(props.postText)
            props.changePostText('')
        }


    const onPostChange = (event:ChangeEvent<HTMLTextAreaElement>) => {
        props.changePostText(event.currentTarget.value)
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