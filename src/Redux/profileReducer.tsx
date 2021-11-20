import { v1 }                   from "uuid";
import { Dispatch }             from "react";
import { profileAPI, usersAPI } from "../api/Api";

const ADD_POST = 'ADD-POST';
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
    type: 'ADD-POST',
    newPostMessage: string
}
type SetUserProfileACType = {
    type: 'SET_USER_PROFILE'
    profile: any
}
type SetStatusACType = {
    type: "SET_STATUS",
    status: string
}
type ProfileActionType = AddPostActionType | SetUserProfileACType | SetStatusACType
export type PostType = {
    id: string,
    message: string,
    likesCount: number
}
export type InitialStateType = {
    post: PostType[]
    profile: null | UserProfileType
    status: string
}

const initialState: InitialStateType = {
    post: [
        { id: v1(), message: 'Hello', likesCount: 12 },
        { id: v1(), message: 'Its my first post', likesCount: 30 },
        { id: v1(), message: 'Yo', likesCount: 40 },
        { id: v1(), message: 'Mu-a-ha-ha', likesCount: 606 },
    ] as Array<PostType>,
    profile: null,
    status: '',
}

export const profileReducer = (state: InitialStateType = initialState, action: ProfileActionType): InitialStateType => {
    switch (action.type) {
        case ADD_POST :
            return {
                ...state,
                post: [...state.post,
                    {
                        id: v1(),
                        message: action.newPostMessage,
                        likesCount: 0,
                    }],
            }
        case SET_USER_PROFILE:
            return { ...state, profile: action.profile }
        case "SET_STATUS":
            return { ...state, status: action.status }
        default:
            return state
    }
}

export const addPost = (newPostMessage: string): AddPostActionType => ({ type: ADD_POST, newPostMessage })
export const setUserProfile = (profile: UserProfileType): SetUserProfileACType => ({ type: SET_USER_PROFILE, profile })
export const setStatus = (status: string): SetStatusACType => ({ type: "SET_STATUS", status })

//thunk
export const SetUserProfile = (userId: string) => {
    return (dispatch: Dispatch<ProfileActionType>) => {
        usersAPI.setUserProfile( userId )
                .then( data => {
                    dispatch( setUserProfile( data ) )
                } )
    }
}
export const getStatus = (userId: string) => {
    return (dispatch: Dispatch<ProfileActionType>) => {
        profileAPI.getStatus( userId )
                  .then( response => {
                      dispatch( setStatus( response.data ) )
                  } )
    }
}
export const updateStatus = (status: string) => {
    return (dispatch: Dispatch<ProfileActionType>) => {
        profileAPI.updateStatus( status )
                  .then( response => {
                      if(response.data.resultCode === 0) {
                          dispatch( setStatus( status ) )
                      }
                  } )
    }
}
