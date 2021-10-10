type LocationType = {
    city: string
    country: string
}
export type UsersType = {
    followed: boolean
    id: string
    avatar: string
    fullName: string
    status: string
    location: LocationType
}
type FollowACType = {
    type: 'FOLLOW'
    userId: string
}
type UnFollowACType = {
    type: 'UNFOLLOW'
    userId: string
}
type SetUsersACType = {
    type: 'SET_USERS'
    users: UsersType[]
}
type UsersActionType = FollowACType | UnFollowACType | SetUsersACType
let initialState : InitialStateType = {
    users: []
}
export type InitialStateType =  {
    users: UsersType[]
}

export const UsersReducer = (state: InitialStateType = initialState, action: UsersActionType): InitialStateType => {
    switch (action.type) {
        case "FOLLOW":
            /*let stateCopy = {...state, users: state.users.map(m=> m.id === action.userId ? {...m, followed:true}: m)}
            return stateCopy*/
            return {...state, users: [...state.users].map(m => m.id === action.userId ? {...m, followed: true} : m)}
        case 'UNFOLLOW':
            return {...state, users: [...state.users].map(m => m.id === action.userId ? {...m, followed: false} : m)}
        case 'SET_USERS':
            return {...state, users: [ ...action.users]}
        default:
            return state
    }
}

export const FollowAC = (userId: string): FollowACType => {
    return {type: 'FOLLOW', userId}
}

export const UnFollowAC = (userId: string): UnFollowACType => {
    return {type: 'UNFOLLOW', userId}
}

export const SetUsersAC = (users: UsersType[]): SetUsersACType => {
    return {type: 'SET_USERS', users}
}