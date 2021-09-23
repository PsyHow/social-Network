import {ActionsType, AddPostActionType, ChangePostActionTextType, postType, profilePageType} from "./State";

const ADD_POST = 'ADD-POST';
const CHANGE_POST_TEXT = 'CHANGE-POST-TEXT';

const profileReducer = (state: profilePageType, action: ActionsType) => {
    switch (action.type) {
        case ADD_POST :
            const newPost: postType = {
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