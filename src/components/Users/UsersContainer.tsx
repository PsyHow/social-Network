import {connect} from "react-redux";
import {Users} from './Users';
import {AppStateType} from "../../Redux/redux-store";
import {FollowAC, InitialStateType, SetUsersAC, UnFollowAC, UsersType} from "../../Redux/usersReducer";
import {Dispatch} from "redux";

type MapStateToPropsType = {
    usersPage: InitialStateType
}

type mapDispatchToPropsType = {
    follow: (userId: string) => void
    unFollow: (userId: string) => void
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
        follow: (userId: string) => {
            dispatch(FollowAC(userId))
        },
        unFollow: (userId: string) => {
            dispatch(UnFollowAC(userId))
        },
        setUsers: (users: UsersType[]) => {
            dispatch(SetUsersAC(users))
        }
    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)