import {v1} from "uuid";
import {Dispatch} from "react";
import {profileAPI, usersAPI} from "../api/Api";

const ADD_POST = 'ADD-POST';
const CHANGE_POST_TEXT = 'CHANGE-POST-TEXT';
const SET_USER_PROFILE = "SET_USER_PROFILE"

export type UserProfileType = {
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: {
        github: string
        vk: string
        facebook: string
        instagram: string
        twitter: string
        website: string
        youtube: string
        mainLink: string
    }
    photos: {
        small: string
        large: string
    }

}

type AddPostActionType = {
    type: 'ADD-POST'
}
type ChangePostActionTextType = {
    type: 'CHANGE-POST-TEXT'
    newPostText: string
}
type SetUserProfileACType = {
    type: 'SET_USER_PROFILE'
    profile: any
}
type SetStatusACType = {
    type: "SET_STATUS",
    status: string
}
type ProfileActionType = AddPostActionType | ChangePostActionTextType | SetUserProfileACType | SetStatusACType


export type PostType = {
    id: string,
    message: string,
    likesCount: number
}
const initialState: InitialStateType = {
    post: [
        {id: v1(), message: 'Hello', likesCount: 12},
        {id: v1(), message: 'Its my first post', likesCount: 30},
        {id: v1(), message: 'Yo', likesCount: 40},
        {id: v1(), message: 'Mu-a-ha-ha', likesCount: 606}
    ] as Array<PostType>,
    postText: ' ',
    profile: null,
    status: ''
}
export type InitialStateType = {
    post: PostType[]
    postText: string
    profile: null | UserProfileType
    status: string
}
export const profileReducer = (state: InitialStateType = initialState, action: ProfileActionType): InitialStateType => {
    switch (action.type) {
        case ADD_POST :
            return {
                ...state, postText: '', post: [...state.post, {
                    id: v1(),
                    message: state.postText,
                    likesCount: 0
                }]
            }
        case CHANGE_POST_TEXT :
            return {...state, postText: action.newPostText}
        case SET_USER_PROFILE:
            return {...state, profile: action.profile}
        case "SET_STATUS":
            return {...state, status: action.status}
        default:
            return state
    }
}

export const addPost = (): AddPostActionType => ({type: ADD_POST})
export const postChange = (newPostText: string): ChangePostActionTextType =>
    ({type: CHANGE_POST_TEXT, newPostText: newPostText})
export const setUserProfile = (profile: UserProfileType): SetUserProfileACType => {
    return {type: SET_USER_PROFILE, profile}
}
export const setStatus = (status: string): SetStatusACType => {
    return {type: "SET_STATUS", status}
}


//thunk
export const SetUserProfile = (userId: string) => {
    return (dispatch: Dispatch<ProfileActionType>) => {
        usersAPI.setUserProfile(userId)
            .then(data => {
                dispatch(setUserProfile(data))
            })
    }
}
export const getStatus = (userId: string) => {
    return (dispatch: Dispatch<ProfileActionType>) => {
        profileAPI.getStatus(userId)
            .then(response => {
                dispatch(setStatus(response.data))
            })
    }
}
export const updateStatus = (status: string) => {
    return (dispatch: Dispatch<ProfileActionType>) => {
        profileAPI.updateStatus(status)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(setStatus(status))
                }
            })
    }
}
