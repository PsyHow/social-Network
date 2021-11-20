import React                                   from 'react';
import styles                                  from './MyPosts.module.css';
import Post                                    from "./Post/Post";
import { PostType }                            from "../../../Redux/profileReducer";
import { Field, InjectedFormProps, reduxForm } from "redux-form";

type propsType = {
    addPost: (newPostMessage: string) => void
    posts: PostType[]
}


const MyPost = (props: propsType) => {
    const myPosts = props.posts.map( p => <Post key={p.id} message={p.message} likescount={p.likesCount}/> )

    const addNewPost = (formData: FormDataType) => {
        props.addPost( formData.newPostMessage )
    }

    return (
        <div>
            <div className={styles.posts}>
                {myPosts}
            </div>
            <AddPostFormRedux onSubmit={addNewPost}/>
        </div>

    )
}
export default MyPost;

type FormDataType = {
    newPostMessage: string
}
const AddPostForm = (props: InjectedFormProps<FormDataType>) => {
    return <>
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={'textarea'} name={'newPostMessage'} placeholder={'Enter your message'}/>
            </div>
            <div>
                <button>Send post</button>
            </div>
        </form>
    </>
}

const AddPostFormRedux = reduxForm<FormDataType>( { form: 'PostMessageForm' } )( AddPostForm )

