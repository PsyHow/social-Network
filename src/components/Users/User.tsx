import { FC } from 'react';

import { NavLink } from 'react-router-dom';

import style from './Users.module.css';

import userPhoto from 'assets/images/user.png';
import { UsersType } from 'types';

export const User: FC<PropsType> = ({ user, followProgress, follow, unFollow }) => (
  <div className={style.items}>
    <NavLink to={`/profile/${user.id}`}>
      <div>
        <img
          alt="photoProfile"
          src={user.photos.small !== null ? user.photos.small : userPhoto}
        />
      </div>
    </NavLink>
    <div>
      {user.followed ? (
        <button
          type="submit"
          disabled={followProgress.some(id => id === user.id)}
          className={style.button}
          onClick={() => {
            follow(user.id);
          }}
        >
          UnFollow
        </button>
      ) : (
        <button
          type="submit"
          disabled={followProgress.some(id => id === user.id)}
          className={style.button}
          onClick={() => {
            unFollow(user.id);
          }}
        >
          Follow
        </button>
      )}
    </div>

    <div className={style.userInfo}>
      <div>{user.name}</div>
      <div>{user.status}</div>
    </div>

    <div>
      <div>u.location?.country</div>
      <div>u.location?.city</div>
    </div>
  </div>
);

// types
type PropsType = {
  user: UsersType;
  followProgress: number[];
  follow: (id: number) => void;
  unFollow: (id: number) => void;
};
