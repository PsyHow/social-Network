import React from 'react'
import s from './Users.module.css'
import {v1} from "uuid";
import {UsersPropsType} from "./UsersContainer";

export const Users = (props: UsersPropsType) => {

    if(props.usersPage.users.length === 0) {
        props.setUsers([
            {
                id: v1(),
                avatar: 'https://mir-s3-cdn-cf.behance.net/project_modules/disp/ce54bf11889067.562541ef7cde4.png',
                followed: false,
                fullName: 'Viktor',
                status: 'Like a boss',
                location: {city: 'Pavlodar', country: 'Kazakhstan'}
            },
            {
                id: v1(),
                avatar: 'https://mir-s3-cdn-cf.behance.net/project_modules/disp/ce54bf11889067.562541ef7cde4.png',
                followed: false,
                fullName: 'Ilyas',
                status: 'Ilysimus',
                location: {city: 'Almaty', country: 'Kazakhstan'}
            },
            {
                id: v1(),
                avatar: 'https://mir-s3-cdn-cf.behance.net/project_modules/disp/ce54bf11889067.562541ef7cde4.png',
                followed: true,
                fullName: 'Diyar',
                status: 'I wont to be a HackerMan',
                location: {city: 'Pavlodar', country: 'Kazakhstan'}
            }
        ])
    }

    return (
        <div className={s.wrapper}>
            {props.usersPage.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.avatar}/>
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => props.unFollow(u.id)}>UnFollow</button>
                            : <button onClick={() => props.follow(u.id)}>Follow</button>
                        }
                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.fullName}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{u.location.city}</div>
                        <div>{u.location.country}</div>
                    </span>
                </span>
            </div>)}
        </div>
    )
}