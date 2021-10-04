import React from 'react';
import s from './Post.module.css'

type messageTypes = {
    message: string
    likescount: number
};

const Post = (props: messageTypes) => {
    return (
        <div className={s.PostWrapper}>

            <div className={s.box1}>
                <div className={s.ava}>
                    <img
                        src='https://mir-s3-cdn-cf.behance.net/project_modules/disp/ce54bf11889067.562541ef7cde4.png'/>
                </div>
            </div>
            <div className={s.box2}>{props.message}</div>
            <div className={s.box3}>{props.likescount}</div>
        </div>

    )
}
export default Post;