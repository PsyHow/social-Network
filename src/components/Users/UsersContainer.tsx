import {connect} from "react-redux";
import {AppStateType} from "../../Redux/redux-store";
import {
    followingInProgress,
    getUsers,
    setCurrentPage,
    UsersType,
    follow,
    unFollow
} from "../../Redux/usersReducer";
import React from "react";
import {Users}     from "./Users";
import {Preloader} from "../common/Preloader/Preloader";
import {compose}   from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

export type UsersPropsType = MapStateToPropsType & mapDispatchToPropsType

export type MapStateToPropsType = {
    usersPage: UsersType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followProgress: Array<number>
}

export type mapDispatchToPropsType = {
    follow: (id: number) => void
    unFollow: (id: number) => void
    setCurrentPage: (currentPage: number) => void
    followingInProgress: (isFetching: boolean, userId: number) => void
    getUsers: (currentPage: number, pageSize: number) => void
}


const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        usersPage: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followProgress: state.usersPage.followingProgress
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
            {this.props.isFetching ? <Preloader/> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   follow={this.props.follow}
                   unFollow={this.props.unFollow}
                   usersPage={this.props.usersPage}
                   currentPage={this.props.currentPage}
                   onPageChanged={this.onPageChanged}
                   followProgress={this.props.followProgress}/>

        </>


    }
}

// important type compose with generic <React.ComponentType>
export default compose<React.ComponentType>(
    connect(mapStateToProps, {
        follow,
        unFollow,
        setCurrentPage,
        getUsers,
        followingInProgress
    }),
    withAuthRedirect
)(UsersAPIComponent)
