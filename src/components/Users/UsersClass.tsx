import React from 'react'
import s from "./Users.module.css";
import userPhoto from "../../assets/images/user.png";
import axios from "axios";
import {UsersType} from "../../Redux/usersReducer";
import {UsersPropsType} from "./UsersContainer";

type PropsType = UsersPropsType

export class UsersClass extends React.Component<PropsType> {

    componentDidMount() {
        axios.get<UsersType[]>("https://social-network.samuraijs.com/api/1.0/users")
            .then(response => {
                // @ts-ignore
                this.props.setUsers(response.data.items)
            })
    }

    render() {
        return (<>
                <div className={s.wrapper}>
                    {this.props.usersPage.users.map(u => <div className={s.itemsWrapper} key={u.id}>
                        <div className={s.items}>
                            <div>
                                <img src={u.photos.small !== null ? u.photos.small : userPhoto}/>
                            </div>

                            <div className={s.button}>
                                {u.followed
                                    ? <button onClick={() => this.props.unFollow(u.id)}>UnFollow</button>
                                    : <button onClick={() => this.props.follow(u.id)}>Follow</button>
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
        )
    }
}
