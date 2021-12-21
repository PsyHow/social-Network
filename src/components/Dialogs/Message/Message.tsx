import { FC } from 'react';

import style from '../Dialogs.module.css';

export const Message: FC<PropsType> = ({ message }) => (
  <div>
    <div className={style.message}>{message}</div>
  </div>
);

// types
type PropsType = {
  message: string;
};
