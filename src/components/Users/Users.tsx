import React         from "react";
import style         from "./Users.module.css";
import userPhoto     from "../../assets/images/user.png";
import { NavLink }   from "react-router-dom";
import { UsersType } from "../../types/types";


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

    const pagesCount = Math.ceil(totalUsersCount / pageSize)
    const page = []
    for (let i = 1; i <= pagesCount; i++) {
        page.push(i)
    }


    return <>

        { page.map(m => <span
            className={ currentPage === m ? style.selectedPage : style.Page }
            onClick={ () => {
                onPageChanged(m)
            } }>{ m }</span>) }

        <div className={ style.wrapper }>
            { usersPage.map(u => <div className={ style.itemsWrapper } key={ u.id }>
                <div className={ style.items }>
                    <NavLink to={ '/profile/' + u.id }>
                        <div>
                            <img alt={'photoProfile'} src={ u.photos.small !== null ? u.photos.small : userPhoto }/>
                        </div>
                    </NavLink>
                    <div>
                        { u.followed
                            ? <button disabled={ followProgress.some(id => id === u.id) }
                                      className={ style.button }
                                      onClick={ () => {
                                          follow(u.id)
                                      } }>
                                UnFollow
                            </button>
                            : <button disabled={ followProgress.some(id => id === u.id) }
                                      className={ style.button }
                                      onClick={ () => {
                                          unFollow(u.id)
                                      } }>
                                Follow
                            </button>
                        }
                    </div>

                    <div className={ style.userInfo }>
                        <div>{ u.name }</div>
                        <div>{ u.status }</div>
                    </div>

                    <div>
                        <div>{ "u.location?.country" }</div>
                        <div>{ "u.location?.city" }</div>
                    </div>

                </div>

            </div>) }
        </div>

    </>
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