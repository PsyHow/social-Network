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
type SetUsersACType = {
    type: 'SET_USERS'
    users: UsersType[]
}


type UsersActionType = FollowACType | UnFollowACType | SetUsersACType

let initialState: InitialStateType = {
    users: []
}
export type InitialStateType = {
    users: UsersType[]
};

export const UsersReducer = (state: InitialStateType = initialState, action: UsersActionType): InitialStateType => {
    switch (action.type) {
        case "FOLLOW":
            return {...state, users: [...state.users].map(m => m.id === action.id ? {...m, followed: true} : m)}
        case 'UNFOLLOW':
            return {...state, users: [...state.users].map(m => m.id === action.id ? {...m, followed: false} : m)}
        case 'SET_USERS':
            return {...state, users: [...state.users, ...action.users]}
        default:
            return state
    }
}

export const FollowAC = (id: number): FollowACType => {
    return {type: 'FOLLOW', id}
}

export const UnFollowAC = (id: number): UnFollowACType => {
    return {type: 'UNFOLLOW', id}
}

export const SetUsersAC = (users: UsersType[]): SetUsersACType => {
    return {type: 'SET_USERS', users}
}