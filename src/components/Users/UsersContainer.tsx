import {connect} from "react-redux";
import {AppStateType} from "../../Redux/redux-store";
import {FollowAC, InitialStateType, SetUsersAC, UnFollowAC, UsersType} from "../../Redux/usersReducer";
import {Dispatch} from "redux";
import {UsersClass} from "./UsersClass";

export type MapStateToPropsType = {
    usersPage: InitialStateType
}

export type mapDispatchToPropsType = {
    follow: (id: number) => void
    unFollow: (id: number) => void
    setUsers: (users: UsersType[]) => void
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        usersPage: state.usersPage
    }

}

export type UsersPropsType = MapStateToPropsType & mapDispatchToPropsType

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        follow: (id: number) => {
            dispatch(FollowAC(id))
        },
        unFollow: (id: number) => {
            dispatch(UnFollowAC(id))
        },
        setUsers: (users: UsersType[]) => {
            dispatch(SetUsersAC(users))
        }
    }
}
export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersClass)