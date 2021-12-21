import { FC } from 'react';

import { NavLink } from 'react-router-dom';

import style from '../Dialogs.module.css';

export const DialogsItem: FC<PropsType> = ({ id, name }) => {
  const path = `/dialogs/${id}`;

  return (
    <div className={style.dialog}>
      <img
        alt="avatar"
        src="https://cdn1.iconfinder.com/data/icons/user-interface-design-flat/60/017_-_Male_User-ui-user-interface-avatar-512.png"
      />
      <NavLink activeClassName={style.active} to={path}>
        {name}
      </NavLink>
    </div>
  );
};

// types
type PropsType = {
  id: string;
  name: string;
};
