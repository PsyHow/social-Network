import { FC } from 'react';

import style from './Post.module.css';

export const Post: FC<PropsType> = ({ message, likesCount }) => (
  <div className={style.PostWrapper}>
    <div className={style.box1}>
      <div className={style.ava}>
        <img
          alt="avatar"
          src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/ce54bf11889067.562541ef7cde4.png"
        />
      </div>
    </div>
    <div className={style.box2}>{message}</div>
    <div className={style.box3}>{likesCount}</div>
  </div>
);

// types
type PropsType = {
  message: string;
  likesCount: number;
};
