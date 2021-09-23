import React, {ChangeEvent} from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {ActionsType, RootStateType, StoreType} from "../../../Redux/State";

type propsType = {
    store:StoreType
    //addPost:(postText: string)=>void
    postText:string
    //changePostText:(NewPostText: string)=>void
    dispatch: (action: ActionsType) => void
}

const MyPost = (props: propsType) => {
    let myPosts = props.store._state.profilePage.post.map(p => <Post message={p.message} likescount={p.likesCount}/>)



    const addPostHandler = () => {
        props.dispatch({type:'ADD-POST'})
        props.dispatch({type:"CHANGE-POST-TEXT", newPostText: ''})
        }


    const onPostChange = (event:ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch({type:"CHANGE-POST-TEXT", newPostText: props.postText})
        props.dispatch({type:"CHANGE-POST-TEXT", newPostText: (event.currentTarget.value)})
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