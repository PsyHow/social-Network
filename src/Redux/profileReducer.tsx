import { v1 } from "uuid";

type AddPostActionType = {
    type: 'ADD-POST'
}
type ChangePostActionTextType = {
    type: 'CHANGE-POST-TEXT'
    newPostText: string
}
type ProfileActionType = AddPostActionType | ChangePostActionTextType

const ADD_POST = 'ADD-POST';
const CHANGE_POST_TEXT = 'CHANGE-POST-TEXT';
export type PostType = {
    id: string,
    message: string,
    likesCount: number
}
const initialState = {
    post: [
        {id: v1(), message: 'Hello', likesCount: 12},
        {id: v1(), message: 'Its my first post', likesCount: 30},
        {id: v1(), message: 'Yo', likesCount: 40},
        {id: v1(), message: 'Mu-a-ha-ha', likesCount: 606}
    ] as Array<PostType>,
    postText: ' '
}
export type InitialStateType = typeof initialState
const profileReducer = (state : InitialStateType = initialState, action: ProfileActionType) :InitialStateType => {
    switch (action.type) {
        case ADD_POST :
            return {...state, postText: '', post: [...state.post,{
                    id: v1(),
                    message: state.postText,
                    likesCount: 0
                }]}
        case CHANGE_POST_TEXT :
            return {...state, postText: action.newPostText}
        default:
            return state
    }
}

export const addPost = (): AddPostActionType => ({type: ADD_POST})
export const postChange = (newPostText: string): ChangePostActionTextType =>
    ({type: CHANGE_POST_TEXT, newPostText: newPostText})

export default profileReducer;