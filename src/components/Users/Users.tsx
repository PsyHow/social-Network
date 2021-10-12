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
                // @ts-ignore
                props.setUsers(response.data.items)
            })
    }

    return (
        <div className={s.wrapper}>
            {props.usersPage.users.map(u => <div className={s.itemsWrapper} key={u.id}>
                <div className={s.items}>
                    <div>
                        <img src={u.photos.small !== null ? u.photos.small : userPhoto}/>
                    </div>
                    <br/>
                    <div className={s.button}>
                        {u.followed
                            ? <button onClick={() => props.unFollow(u.id)}>UnFollow</button>
                            : <button onClick={() => props.follow(u.id)}>Follow</button>
                        }
                    </div>
                    <br/>
                    <div className={s.userInfo}>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </div>

                </div>
                <span>
                    <span>
                        <div>{u.location?.country}</div>
                        <div>{u.location?.city}</div>
                    </span>
                </span>
            </div>)}
        </div>
    )
}