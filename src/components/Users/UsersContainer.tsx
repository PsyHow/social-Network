import { connect }      from "react-redux";
import { AppStateType } from "../../Redux/redux-store";
import {
    follow,
    followingInProgress,
    requestUsers,
    setCurrentPage,
    unFollow,
    UsersType,
}                       from "../../Redux/usersReducer";
import React            from "react";
import { Users }        from "./Users";
import { Preloader }    from "../common/Preloader/Preloader";
import { compose }      from "redux";
import {
    currentPage,
    followingProgress,
    getPageSize,
    getUsers,
    isFetching,
    totalUsersCount,
}                       from "../../Redux/users-selectors";

// const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
//     return {
//         usersPage: state.usersPage.users,
//         pageSize: state.usersPage.pageSize,
//         totalUsersCount: state.usersPage.totalUsersCount,
//         currentPage: state.usersPage.currentPage,
//         isFetching: state.usersPage.isFetching,
//         followProgress: state.usersPage.followingProgress,
//     }
//
// }

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        usersPage: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: totalUsersCount(state),
        currentPage: currentPage(state),
        isFetching: isFetching(state),
        followProgress: followingProgress(state),
    }
}

export class UsersAPIComponent extends React.Component<UsersPropsType> {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNumber: number) => {
        this.props.getUsers(pageNumber, this.props.pageSize)
    }

    render() {

        return <>
            { this.props.isFetching ? <Preloader/> : null }
            <Users totalUsersCount={ this.props.totalUsersCount }
                   pageSize={ this.props.pageSize }
                   follow={ this.props.follow }
                   unFollow={ this.props.unFollow }
                   usersPage={ this.props.usersPage }
                   currentPage={ this.props.currentPage }
                   onPageChanged={ this.onPageChanged }
                   followProgress={ this.props.followProgress }/>
        </>

    }
}

// important type compose with generic <React.ComponentType>
export default compose<React.ComponentType>(
    connect(mapStateToProps, {
        follow,
        unFollow,
        setCurrentPage,
        getUsers: requestUsers,
        followingInProgress,
    }),
)(UsersAPIComponent)


type UsersPropsType = MapStateToPropsType & mapDispatchToPropsType
type MapStateToPropsType = {
    usersPage: UsersType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followProgress: Array<number>
}
type mapDispatchToPropsType = {
    follow: (id: number) => void
    unFollow: (id: number) => void
    setCurrentPage: (currentPage: number) => void
    followingInProgress: (isFetching: boolean, userId: number) => void
    getUsers: (currentPage: number, pageSize: number) => void
}