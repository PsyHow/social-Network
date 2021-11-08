import {v1} from "uuid";
import {Dispatch} from "react";
import {usersAPI} from "../API/Api";

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
type ProfileActionType = AddPostActionType | ChangePostActionTextType | SetUserProfileACType

const ADD_POST = 'ADD-POST';
const CHANGE_POST_TEXT = 'CHANGE-POST-TEXT';
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
}
export type InitialStateType = {
    post: PostType[]
    postText: string
    profile: null | UserProfileType
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
        case "SET_USER_PROFILE":
            return {...state, profile: action.profile}
        default:
            return state
    }
}

export const addPost = (): AddPostActionType => ({type: ADD_POST})
export const postChange = (newPostText: string): ChangePostActionTextType =>
    ({type: CHANGE_POST_TEXT, newPostText: newPostText})
export const setUserProfile = (profile: UserProfileType): SetUserProfileACType => {
    return {type: "SET_USER_PROFILE", profile}
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
