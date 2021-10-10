import {addPostActionCreator, changePostTextActionCreator, PostType,} from "../../../Redux/profileReducer";
import MyPost from "./MyPost";
import {connect} from "react-redux";
import {AppStateType} from "../../../Redux/redux-store";
import {Dispatch} from "redux";


type MatStateToPropsType = {
    posts: PostType[],
    postText: string
}

type MapDispatchToPropsType = {
    addPost: () => void
    postChange: (postText: string) => void
}

let mapStateToProps = (state: AppStateType): MatStateToPropsType => {
    return {
        posts: state.profilePage.post,
        postText: state.profilePage.postText
    }
}
let mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        addPost: () => {
            dispatch(addPostActionCreator())
        },
        postChange: (postText: string) => {
            dispatch(changePostTextActionCreator(postText))
        }
    }
}
export const MyPostContainer = connect(mapStateToProps, mapDispatchToProps)(MyPost)