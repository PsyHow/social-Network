import React                             from 'react';
import styles                            from './MyPosts.module.css';
import Post                              from "./Post/Post";
import { PostType }                      from "../../../Redux/profileReducer";
import { AddPostForm, FormPostDataType } from "./AddPostForm/AddPostForm";

type propsType = {
    addPost: (newPostMessage: string) => void
    posts: PostType[]
}

export const MyPost = (props: propsType) => {
    const myPosts = props.posts.map(p => <Post key={ p.id } message={ p.message } likescount={ p.likesCount }/>)

    const addNewPost = (formData: FormPostDataType) => {
        props.addPost(formData.newPostMessage)
    }

    return (
        <div>
            <div className={ styles.posts }>
                { myPosts }
            </div>
            <AddPostForm onSubmit={ addNewPost }/>
        </div>

    )
}






