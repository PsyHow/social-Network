import React from "react";
import s from "./Users.module.css";
import userPhoto from "../../assets/images/user.png";
import {UsersType} from "../../Redux/usersReducer";
import { NavLink } from "react-router-dom";

type propsType = {
    totalUsersCount: number
    pageSize: number
    follow: (id: number) => void
    unFollow: (id: number) => void
    usersPage: UsersType[]
    currentPage: number
    onPageChanged: (pageNumber: number) => void
}

export const Users = (props: propsType) => {

    const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    const page = []
    for (let i = 1; i <= pagesCount; i++) {
        page.push(i)
    }

    return <>

        {page.map(m => <span
            className={props.currentPage === m ? s.selectedPage : s.Page}
            onClick={(e) => {
                props.onPageChanged(m)
            }}>{m}</span>)}

        <div className={s.wrapper}>
            {props.usersPage.map(u => <div className={s.itemsWrapper} key={u.id}>
                <div className={s.items}>
                    <NavLink to={'/profile/' + u.id}>
                        <div>
                            <img src={u.photos.small !== null ? u.photos.small : userPhoto}/>
                        </div>
                    </NavLink>
                    <div>
                        {u.followed
                            ? <button className={s.button} onClick={() => props.unFollow(u.id)}>UnFollow</button>
                            : <button className={s.button} onClick={() => props.follow(u.id)}>Follow</button>
                        }
                    </div>

                    <div className={s.userInfo}>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </div>

                    <div>
                        <div>{"u.location?.country"}</div>
                        <div>{"u.location?.city"}</div>
                    </div>

                </div>

            </div>)}
        </div>

    </>
}