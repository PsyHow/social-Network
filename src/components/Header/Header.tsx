import { FC } from 'react';

import { NavLink } from 'react-router-dom';

import style from './Header.module.css';

import { ROUTING_PATH } from 'enums';
import { Nullable } from 'types';

export const Header: FC<PropsType> = ({ isAuth, login, logout }) => (
  <header className={style.header}>
    <img alt="logo" src="https://img.icons8.com/plasticine/2x/duolingo-logo.png" />
    <div className={style.loginBlock}>
      {isAuth ? (
        <div>
          {login} -{' '}
          <button type="button" onClick={logout}>
            Log out
          </button>
        </div>
      ) : (
        <NavLink to={ROUTING_PATH.LOGIN}>Login</NavLink>
      )}
    </div>
  </header>
);

// types
type PropsType = {
  isAuth: boolean;
  login: Nullable<string>;
  logout: () => void;
};
