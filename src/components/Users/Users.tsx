import React from "react";
import style from "./Users.module.css";
import { UsersType } from "../../types/types";
import { Paginator } from "../common/Paginator/Paginator";
import { User } from "./User";


export const Users = (props: PropsType) => {

    const {
        totalUsersCount,
        pageSize,
        follow,
        unFollow,
        usersPage,
        currentPage,
        onPageChanged,
        followProgress,
    } = props


    return <div>

        <Paginator totalItemsCount={ totalUsersCount }
                   pageSize={ pageSize }
                   currentPage={ currentPage }
                   onPageChanged={ onPageChanged }
        />

        <div className={ style.wrapper }>
            { usersPage.map(user =>
                <User key={ user.id }
                      user={ user }
                      followProgress={ followProgress }
                      follow={ follow }
                      unFollow={ unFollow }
                />)
            }
        </div>
    </div>
}

//types
type PropsType = {
    totalUsersCount: number
    pageSize: number
    follow: (id: number) => void
    unFollow: (id: number) => void
    usersPage: Array<UsersType>
    currentPage: number
    onPageChanged: (pageNumber: number) => void
    followProgress: Array<number>
}