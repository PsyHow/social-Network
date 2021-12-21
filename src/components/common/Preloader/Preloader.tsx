import { FC } from 'react';

import preloader from '../../../assets/images/Rocket.gif';

import styles from './Preloader.module.css';

export const Preloader: FC = () => (
  <div>
    <img alt="preloader" src={preloader} className={styles.img} />
  </div>
);
