import { v1 }                   from "uuid";
import { profileAPI, usersAPI } from "../api/Api";
import { AppThunkType }         from "./redux-store";
import { PostType, UserProfileType }      from "../types/types";


const initialState = {
    post: [
        { id: v1(), message: "Hello", likesCount: 12 },
        { id: v1(), message: "Its my first post", likesCount: 30 },
        { id: v1(), message: "Yo", likesCount: 40 },
        { id: v1(), message: "Mu-a-ha-ha", likesCount: 606 },
    ] as Array<PostType>,
    profile: null as UserProfileType | null,
    status: '',
    newPostText: '',
}

export const profileReducer = (state = initialState, action: ProfileActionType): InitialStateType => {
    switch (action.type) {
        case "PROFILE/ADD_POST" :
            return {
                ...state,
                post: [...state.post,
                    {
                        id: v1(),
                        message: action.newPostMessage,
                        likesCount: 0,
                    }],
                newPostText: "",
            }
        case "PROFILE/SET_USER_PROFILE":
            return { ...state, profile: action.profile }
        case "PROFILE/SET_STATUS":
            return { ...state, status: action.status }
        default:
            return state
    }
}


export const addPost = (newPostMessage: string) => ( { type: "PROFILE/ADD_POST", newPostMessage } as const )

export const setUserProfile = (profile: UserProfileType) => ( { type: "PROFILE/SET_USER_PROFILE", profile } as const )

export const setStatus = (status: string) => ( { type: "PROFILE/SET_STATUS", status } as const )

//thunk
export const SetUserProfile = (userId: string): AppThunkType =>
    (dispatch) => {
        usersAPI.setUserProfile(userId)
            .then(data => {
                dispatch(setUserProfile(data))
            })
    }

export const getStatus = (userId: string): AppThunkType =>
    (dispatch) => {
        profileAPI.getStatus(userId)
            .then(response => {
                dispatch(setStatus(response.data))
            })
    }

export const updateStatus = (status: string): AppThunkType =>
    (dispatch) => {
        profileAPI.updateStatus(status)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(setStatus(status))
                }
            })
    }

//types
export type AddPostType = ReturnType<typeof addPost>
export type ProfileActionType = AddPostType
    | ReturnType<typeof setUserProfile>
    | ReturnType<typeof setStatus>
type InitialStateType = typeof initialState