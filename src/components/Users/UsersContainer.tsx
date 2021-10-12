import {connect} from "react-redux";
import {Users} from './Users';
import {AppStateType} from "../../Redux/redux-store";
import {FollowAC, InitialStateType, SetUsersAC, UnFollowAC, UsersType} from "../../Redux/usersReducer";
import {Dispatch} from "redux";

type MapStateToPropsType = {
    usersPage: InitialStateType
}

type mapDispatchToPropsType = {
    follow: (userId: number) => void
    unFollow: (userId: number) => void
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
        follow: (userId: number) => {
            dispatch(FollowAC(userId))
        },
        unFollow: (userId: number) => {
            dispatch(UnFollowAC(userId))
        },
        setUsers: (users: UsersType[]) => {
            dispatch(SetUsersAC(users))
        }
    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)