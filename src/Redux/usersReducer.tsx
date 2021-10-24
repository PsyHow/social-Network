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
    isFetching:boolean
}


type UsersActionType = FollowACType
    | UnFollowACType
    | SetUsersACType
    | SetCurrentPageACType | SetTotalUsersCountACType | ToggleIsFetchingACType

export type InitialStateType = {
    users: UsersType[],
    pageSize: number,
    totalUsersCount: number,
    currentPage: number
    isFetching: boolean
};


const initialState: InitialStateType = {
    users: [],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
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
            return {...state, isFetching : action.isFetching}
        default:
            return state
    }
}

export const follow = (id: number): FollowACType => {
    return {type: 'FOLLOW', id}
}

export const unFollow = (id: number): UnFollowACType => {
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
export const toggleIsFetching = (isFetching:boolean): ToggleIsFetchingACType => {
    return {type: 'TOGGLE_IS_FETCHING', isFetching}
}