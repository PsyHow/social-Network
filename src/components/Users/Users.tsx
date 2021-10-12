import React from 'react'
import s from './Users.module.css'
import {UsersPropsType} from "./UsersContainer";
import axios from 'axios';
import {UsersType} from "../../Redux/usersReducer";
import userPhoto from '../../assets/images/user.png'

export const Users = (props: UsersPropsType) => {

    if (props.usersPage.users.length === 0) {
        axios.get<UsersType[]>("https://social-network.samuraijs.com/api/1.0/users")
            .then((response) => {
                debugger
                // @ts-ignore
                props.setUsers(response.data.items)
            })
       /* props.setUsers([
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
        ])*/
    }

    return (
        <div className={s.wrapper}>
            {props.usersPage.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photos.small !== null ? u.photos.small : userPhoto}/>
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
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{u.location?.country}</div>
                        <div>{u.location?.city}</div>
                    </span>
                </span>
            </div>)}
        </div>
    )
}