import React, {ChangeEvent} from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {PostType,} from "../../../Redux/profileReducer";

type propsType = {
    addPost: () => void
    postChange: (postText: string) => void
    posts: PostType[]
    postText: string
}


const MyPost = (props: propsType) => {
    const myPosts = props.posts.map(p => <Post key={p.id} message={p.message} likescount={p.likesCount}/>)

    const addPostHandler = () => {
        props.addPost()
    }

    const onPostChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        props.postChange(event.currentTarget.value)
    }

    return (
        <div>
            <div className={s.posts}>
                {myPosts}
            </div>
            <div>
                  <textarea value={props.postText}
                            onChange={onPostChange}/>
            </div>
            <div>
                <button onClick={addPostHandler}>Send post</button>
            </div>
        </div>

    )
}
export default MyPost;

