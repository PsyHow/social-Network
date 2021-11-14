import {usersAPI} from "../api/Api";
import {Dispatch} from "react";

export type UsersType = {
    name: string,
    id: number,
    uniqueUrlName: null | string,
    photos: {
        small: null | string
        large: null | string
    },
    status: null | string,
    followed: any
    location?: { city: string, country: string }
}


type FollowACType = {
    type: 'FOLLOW'
    id: number
}
type UnFollowACType = {
    type: 'UNFOLLOW'
    id: number
}
type SetCurrentPageACType = {
    type: 'SET_CURRENT_PAGE',
    currentPage: number
}
type SetUsersACType = {
    type: 'SET_USERS'
    users: UsersType[]
}
type SetTotalUsersCountACType = {
    type: 'SET_TOTAL_USERS_COUNT',
    totalCount: number
}
type ToggleIsFetchingACType = {
    type: 'TOGGLE_IS_FETCHING',
    isFetching: boolean
}
type FollowingInProgressType = {
    type: 'FOLLOWING_IN_PROGRESS'
    isFetching: boolean
    userId: number
}

type UsersActionType = FollowACType
    | UnFollowACType
    | SetUsersACType
    | SetCurrentPageACType
    | SetTotalUsersCountACType
    | ToggleIsFetchingACType
    | FollowingInProgressType

export type InitialStateType = {
    users: UsersType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingProgress: Array<number>
};


const initialState: InitialStateType = {
    users: [],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingProgress: []
}

export const UsersReducer = (state: InitialStateType = initialState, action: UsersActionType): InitialStateType => {
    switch (action.type) {
        case "FOLLOW":
            return {...state, users: [...state.users].map(m => m.id === action.id ? {...m, followed: true} : m)}
        case 'UNFOLLOW':
            return {...state, users: [...state.users].map(m => m.id === action.id ? {...m, followed: false} : m)}
        case 'SET_USERS':
            return {...state, users: action.users}
        case 'SET_CURRENT_PAGE':
            return {...state, currentPage: action.currentPage}
        case 'SET_TOTAL_USERS_COUNT':
            return {...state, totalUsersCount: action.totalCount}
        case "TOGGLE_IS_FETCHING":
            return {...state, isFetching: action.isFetching}
        case "FOLLOWING_IN_PROGRESS":
            return {
                ...state,
                followingProgress:
                    action.isFetching
                        ?
                        [...state.followingProgress, action.userId]
                        :
                        state.followingProgress.filter(id => id !== action.userId)
            }
        default:
            return state
    }
}

export const followSuccess = (id: number): FollowACType => {
    return {type: 'FOLLOW', id}
}

export const unFollowSuccess = (id: number): UnFollowACType => {
    return {type: 'UNFOLLOW', id}
}

export const setUsers = (users: UsersType[]): SetUsersACType => {
    return {type: 'SET_USERS', users}
}
export const setCurrentPage = (currentPage: number): SetCurrentPageACType => {
    return {type: 'SET_CURRENT_PAGE', currentPage}
}
export const setTotalUsersCount = (totalCount: number): SetTotalUsersCountACType => {
    return {type: 'SET_TOTAL_USERS_COUNT', totalCount}
}
export const toggleIsFetching = (isFetching: boolean): ToggleIsFetchingACType => {
    return {type: 'TOGGLE_IS_FETCHING', isFetching}
}
export const followingInProgress = (isFetching: boolean, userId: number): FollowingInProgressType => {
    return {type: 'FOLLOWING_IN_PROGRESS', isFetching, userId}
}


//thunk

export const getUsers = (currentPage: number, pageSize: number) => {
    return (dispatch: Dispatch<UsersActionType>) => {
        dispatch(toggleIsFetching(true))
        usersAPI.getUsers(currentPage, pageSize)
            .then(data => {
                dispatch(toggleIsFetching(false))
                dispatch(setUsers(data.items))
                dispatch(setTotalUsersCount(data.totalCount))
            })
    }
}

export const follow = (userId: number) => {
    return (dispatch: Dispatch<UsersActionType>) => {
        dispatch(followingInProgress(true, userId))
        usersAPI.unfollowUser(userId)
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(unFollowSuccess(userId))
                }
                dispatch(followingInProgress(false, userId))
            })
    }
}

export const unFollow = (userId: number) => {
    return (dispatch: Dispatch<UsersActionType>) => {
        dispatch(followingInProgress(true, userId))
        usersAPI.followUser(userId)
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(followSuccess(userId))
                }
                dispatch(followingInProgress(false, userId))
            })
    }
}