import {
    ActionsType, AddPostActionType, ChangePostActionTextType,
} from "./state";

const ADD_POST = 'ADD-POST';
const CHANGE_POST_TEXT = 'CHANGE-POST-TEXT';
export type PostType = {
    id: number,
    message: string,
    likesCount: number
}
const initialState = {
    post: [
        {id: 1, message: 'Hello', likesCount: 12},
        {id: 2, message: 'Its my first post', likesCount: 30},
        {id: 3, message: 'Yo', likesCount: 40},
        {id: 4, message: 'Mu-a-ha-ha', likesCount: 606}
    ] as Array<PostType>,
    postText: ' '
}
export type InitialStateType2 = typeof initialState
const profileReducer = (state : InitialStateType2 = initialState, action: ActionsType) => {
    switch (action.type) {
        case ADD_POST :
            const newPost: PostType = {
                id: 6,
                message: state.postText,
                likesCount: 0
            }
            state.post.push(newPost)
            return state
    }
    switch (action.type) {
        case CHANGE_POST_TEXT :
            state.postText = action.newPostText
            return state
        default:
            return state
    }
}

export const addPostActionCreator = (): AddPostActionType => ({type: ADD_POST})
export const changePostTextActionCreator = (newPostText: string): ChangePostActionTextType =>
    ({type: CHANGE_POST_TEXT, newPostText: newPostText})

export default profileReducer;