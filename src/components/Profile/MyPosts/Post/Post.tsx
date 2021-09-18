import React from 'react';
import s from './Post.module.css'

type messageTypes = {
    message: string
    likescount: number
};

const Post = (props: messageTypes) => {
    return (
        <div className={s.item}>
            <img
                src='https://mir-s3-cdn-cf.behance.net/project_modules/disp/ce54bf11889067.562541ef7cde4.png'/>
            {props.message}
            <div>
                <span>{props.likescount}</span>
            </div>
        </div>

    )
}
export default Post;