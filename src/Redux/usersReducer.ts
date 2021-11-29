import { usersAPI }     from "../api/Api";
import { UsersType }    from "../types/types";
import { AppThunkType } from "./redux-store";

const initialState = {
    users: [] as Array<UsersType>,
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingProgress: [] as Array<number>, //array of users id
}

export const UsersReducer = (state = initialState, action: UsersActionType): InitialStateType => {
    switch (action.type) {
        case "USERS/FOLLOW":
            return { ...state, users: [...state.users].map(m => m.id === action.id ? { ...m, followed: true } : m) }
        case "USERS/UNFOLLOW":
            return {
                ...state,
                users: [...state.users].map(m => m.id === action.id ? { ...m, followed: false } : m),
            }
        case "USERS/SET_USERS":
            return { ...state, users: action.users }
        case "USERS/SET_CURRENT_PAGE":
            return { ...state, currentPage: action.currentPage }
        case "USERS/SET_TOTAL_USERS_COUNT":
            return { ...state, totalUsersCount: action.totalCount }
        case "USERS/TOGGLE_IS_FETCHING":
            return { ...state, isFetching: action.isFetching }
        case "USERS/FOLLOWING_IN_PROGRESS":
            return {
                ...state,
                followingProgress:
                    action.isFetching
                        ?
                        [...state.followingProgress, action.userId]
                        :
                        state.followingProgress.filter(id => id !== action.userId),
            }
        default:
            return state
    }
}

export const followSuccess = (id: number) => ( { type: "USERS/FOLLOW", id } as const )

export const unFollowSuccess = (id: number) => ( { type: "USERS/UNFOLLOW", id } as const )

export const setUsers = (users: Array<UsersType>) => ( { type: "USERS/SET_USERS", users } as const )

export const setCurrentPage = (currentPage: number) => ( {
    type: 'USERS/SET_CURRENT_PAGE',
    currentPage,
} as const )

export const setTotalUsersCount = (totalCount: number) => ( {
    type: "USERS/SET_TOTAL_USERS_COUNT",
    totalCount,
} as const )

export const toggleIsFetching = (isFetching: boolean) => ( { type: "USERS/TOGGLE_IS_FETCHING", isFetching } as const )

export const followingInProgress = (isFetching: boolean, userId: number) => ( {
    type: "USERS/FOLLOWING_IN_PROGRESS",
    isFetching,
    userId,
} as const )


//thunk
export const requestUsers = (page: number, pageSize: number): AppThunkType =>
    (dispatch) => {
        dispatch(toggleIsFetching(true))
        dispatch(setCurrentPage(page))
        usersAPI.getUsers(page, pageSize)
            .then(data => {
                dispatch(toggleIsFetching(false))
                dispatch(setUsers(data.items))
                dispatch(setTotalUsersCount(data.totalCount))
            })
    }

export const follow = (userId: number): AppThunkType =>
    (dispatch) => {
        dispatch(followingInProgress(true, userId))
        usersAPI.unfollowUser(userId)
            .then(data => {
                if(data.resultCode === 0) {
                    dispatch(unFollowSuccess(userId))
                }
                dispatch(followingInProgress(false, userId))
            })
    }

export const unFollow = (userId: number): AppThunkType =>
    (dispatch) => {
        dispatch(followingInProgress(true, userId))
        usersAPI.followUser(userId)
            .then(data => {
                if(data.resultCode === 0) {
                    dispatch(followSuccess(userId))
                }
                dispatch(followingInProgress(false, userId))
            })
    }

//types
export type SetUsersType = ReturnType<typeof setUsers>
export type UsersActionType = ReturnType<typeof followSuccess>
    | ReturnType<typeof unFollowSuccess>
    | SetUsersType
    | ReturnType<typeof setCurrentPage>
    | ReturnType<typeof setTotalUsersCount>
    | ReturnType<typeof toggleIsFetching>
    | ReturnType<typeof followingInProgress>

type InitialStateType = typeof initialState


