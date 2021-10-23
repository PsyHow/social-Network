import {connect} from "react-redux";
import {AppStateType} from "../../Redux/redux-store";
import {
    followAC,
    setCurrentPageAC,
    setTotalUsersCountAC,
    setUsersAC,
    unFollowAC,
    UsersType
} from "../../Redux/usersReducer";
import {Dispatch} from "redux";
import React from "react";
import axios from "axios";
import {Users} from "./Users";

export type UsersPropsType = MapStateToPropsType & mapDispatchToPropsType

export type MapStateToPropsType = {
    usersPage: UsersType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
}

export type mapDispatchToPropsType = {
    follow: (id: number) => void
    unFollow: (id: number) => void
    setUsers: (users: UsersType[]) => void
    setCurrentPage: (currentPage: number) => void
    setTotalUsersCount: (totalCount: number) => void
}

type UserResponseType = {
    items: UsersType[]
    totalCount: number
    error: string
}



const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        usersPage: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage
    }

}

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        follow: (id: number) => {
            dispatch(followAC(id))
        },
        unFollow: (id: number) => {
            dispatch(unFollowAC(id))
        },
        setUsers: (users: UsersType[]) => {
            dispatch(setUsersAC(users))
        },
        setCurrentPage: (currentPage: number) => {
            dispatch(setCurrentPageAC(currentPage))
        },
        setTotalUsersCount: (totalCount: number) => {
            dispatch(setTotalUsersCountAC(totalCount))
        }
    }
}

export class UsersAPIComponent extends React.Component<UsersPropsType> {

    componentDidMount() {
        axios.get<UserResponseType>(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
            })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        axios.get<UserResponseType>(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
            })
    }

    render() {

        return <Users  totalUsersCount={this.props.totalUsersCount}
                       pageSize={this.props.pageSize}
                       follow={this.props.follow}
                       unFollow={this.props.unFollow}
                       usersPage={this.props.usersPage}
                       currentPage={this.props.currentPage}
                       onPageChanged={this.onPageChanged}/>

    }
}
export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPIComponent)