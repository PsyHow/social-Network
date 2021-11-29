import React                             from "react";
import styles                            from "./MyPosts.module.css";
import Post                              from "./Post/Post";
import { AddPostForm, FormPostDataType } from "./AddPostForm/AddPostForm";
import { PostType }                      from "../../../types/types";



export const MyPost = (props: PropsType) => {
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

//types
type PropsType = {
    addPost: (newPostMessage: string) => void
    posts: Array<PostType>
}






