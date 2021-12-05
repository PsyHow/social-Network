import { profileAPI } from "../api/Api";
import { AppThunkType } from "./redux-store";
import { PostType, UserProfileType } from "../types/types";


const initialState = {
    post: [
        { id: 1, message: "Hello", likesCount: 12 },
        { id: 2, message: "Its my first post", likesCount: 30 },
        { id: 3, message: "Yo", likesCount: 40 },
        { id: 4, message: "Mu-a-ha-ha", likesCount: 606 },
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
                        id: 5,
                        message: action.newPostMessage,
                        likesCount: 0,
                    }],
                newPostText: ' ',
            }
        case "PROFILE/SET_USER_PROFILE":
            return { ...state, profile: action.profile }
        case "PROFILE/SET_STATUS":
            return { ...state, status: action.status }
        case "PROFILE/DELETE_POST":
            return {
                ...state,
                post: state.post.filter(p => p.id !== action.id),
            }
        default:
            return state
    }
}


export const addPost = (newPostMessage: string) => ( { type: "PROFILE/ADD_POST", newPostMessage } as const )

export const setUserProfile = (profile: UserProfileType) => ( { type: "PROFILE/SET_USER_PROFILE", profile } as const )

export const setStatus = (status: string) => ( { type: "PROFILE/SET_STATUS", status } as const )

export const deletePost = (id: number) => ( { type: "PROFILE/DELETE_POST", id } as const )

//thunk
export const SetUserProfile = (userId: string): AppThunkType =>
    async (dispatch) => {
        const response = await profileAPI.setUserProfile(userId)
        dispatch(setUserProfile(response))
    }

export const getStatus = (userId: string): AppThunkType =>
    async (dispatch) => {
        const response = await profileAPI.getStatus(userId)
        dispatch(setStatus(response.data))
    }

export const updateStatus = (status: string): AppThunkType =>
    async (dispatch) => {
        const response = await profileAPI.updateStatus(status)
        if(response.data.resultCode === 0) {
            dispatch(setStatus(status))
        }
    }

//types
export type DeletePostType = ReturnType<typeof deletePost>
export type AddPostType = ReturnType<typeof addPost>
export type ProfileActionType = AddPostType
    | ReturnType<typeof setUserProfile>
    | ReturnType<typeof setStatus>
    | DeletePostType
type InitialStateType = typeof initialState