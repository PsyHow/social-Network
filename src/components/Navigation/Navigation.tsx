import { FC } from 'react';

import { NavLink } from 'react-router-dom';

import style from './Navigation.module.css';

import { ROUTING_PATH } from 'enums';

export const Nav: FC = () => (
  <nav className={style.nav}>
    <div className={style.item}>
      <NavLink to={ROUTING_PATH.USERS} activeClassName={style.active}>
        Users
      </NavLink>
    </div>
    <div className={style.item}>
      <NavLink to={ROUTING_PATH.PROFILE} activeClassName={style.active}>
        Profile
      </NavLink>
    </div>
    <div className={style.item}>
      <NavLink to={ROUTING_PATH.DIALOGS} activeClassName={style.active}>
        Messages
      </NavLink>
    </div>
    <div className={style.item}>
      <NavLink to={ROUTING_PATH.NEWS} activeClassName={style.active}>
        News
      </NavLink>
    </div>
    <div className={style.item}>
      <NavLink to={ROUTING_PATH.MUSIC} activeClassName={style.active}>
        Music
      </NavLink>
    </div>
    <div className={style.item}>
      <NavLink to={ROUTING_PATH.SETTINGS} activeClassName={style.active}>
        Settings
      </NavLink>
    </div>
    <div className={style.item} />
  </nav>
);
