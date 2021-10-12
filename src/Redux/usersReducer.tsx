
export type UsersType = {
        name: string,
    id: number,
    uniqueUrlName: string,
    photos: {
        small:string
        large:string
    },
    status: any,
    followed:boolean
    location?: {city: string, country: string}
}
type FollowACType = {
    type: 'FOLLOW'
    userId: number
}
type UnFollowACType = {
    type: 'UNFOLLOW'
    userId: number
}
type SetUsersACType = {
    type: 'SET_USERS'
    users: UsersType[]
}


type UsersActionType = FollowACType | UnFollowACType | SetUsersACType

let initialState : InitialStateType = {
    users: [ ]
}
export type InitialStateType =  {
    users: UsersType[]
};

export const UsersReducer = (state: InitialStateType = initialState, action: UsersActionType): InitialStateType => {
    switch (action.type) {
        case "FOLLOW":
            return {
                ...state,
                users: state.users
                    .map(m => m.id === action.userId ? {...m, followed: true} : m)}
        case 'UNFOLLOW':
            return {...state, users: [...state.users].map(m => m.id === action.userId ? {...m, followed: false} : m)}
        case 'SET_USERS':
            return {...state, users: [...state.users, ...action.users]}
        default:
            return state
    }
}

export const FollowAC = (userId: number): FollowACType => {
    return {type: 'FOLLOW', userId}
}

export const UnFollowAC = (userId: number): UnFollowACType => {
    return {type: 'UNFOLLOW', userId}
}

export const SetUsersAC = (users: UsersType[]): SetUsersACType => {
    return {type: 'SET_USERS', users}
}