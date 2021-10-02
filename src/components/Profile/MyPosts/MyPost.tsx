import React, {ChangeEvent} from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {

    addPostActionCreator,
    changePostTextActionCreator,

} from "../../../Redux/profileReducer";
import {ActionsType} from "../../../Redux/state";
import {AppStateType} from "../../../Redux/redux-store";


type propsType = {
    store: AppStateType
    dispatch:(action:ActionsType)=> void
}


const MyPost = (props: propsType) => {
    debugger
    let myPosts = props.store.profileReducer.post.map(p => <Post key={p.id} message={p.message} likescount={p.likesCount}/>)


    const addPostHandler = () => {
        props.dispatch(addPostActionCreator())
        props.dispatch(changePostTextActionCreator(''))
    }


    const onPostChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch(changePostTextActionCreator(props.store.profileReducer.postText))
        props.dispatch(changePostTextActionCreator(event.currentTarget.value))
    }

    return (
        <div>
            <div >
                  <textarea value={props.store.profileReducer.postText}
                            onChange={onPostChange}/>
            </div>
            <div>
                <button onClick={addPostHandler}>Send post</button>
            </div>
            <div className={s.postsBlock}>
                <h3>my posts</h3>
            </div>
            <div className={s.posts}>
                {myPosts}
            </div>

        </div>

    )
}
export default MyPost;