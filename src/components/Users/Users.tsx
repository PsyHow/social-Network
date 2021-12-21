import { FC } from 'react';

import { User } from './User';
import style from './Users.module.css';

import { Paginator } from 'components';
import { UsersType } from 'types';

export const Users: FC<PropsType> = ({
  totalUsersCount,
  pageSize,
  follow,
  unFollow,
  usersPage,
  currentPage,
  onPageChanged,
  followProgress,
}) => (
  <div>
    <Paginator
      totalItemsCount={totalUsersCount}
      pageSize={pageSize}
      currentPage={currentPage}
      onPageChanged={onPageChanged}
    />

    <div className={style.wrapper}>
      {usersPage.map(user => (
        <User
          key={user.id}
          user={user}
          followProgress={followProgress}
          follow={follow}
          unFollow={unFollow}
        />
      ))}
    </div>
  </div>
);

// types
type PropsType = {
  totalUsersCount: number;
  pageSize: number;
  follow: (id: number) => void;
  unFollow: (id: number) => void;
  usersPage: UsersType[];
  currentPage: number;
  onPageChanged: (pageNumber: number) => void;
  followProgress: number[];
};
