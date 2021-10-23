import {addPost, postChange, PostType,} from "../../../Redux/profileReducer";
import MyPost from "./MyPost";
import {connect} from "react-redux";
import {AppStateType} from "../../../Redux/redux-store";


type MatStateToPropsType = {
    posts: PostType[],
    postText: string
}

const mapStateToProps = (state: AppStateType): MatStateToPropsType => {
    return {
        posts: state.profilePage.post,
        postText: state.profilePage.postText
    }
}

export const MyPostContainer = connect(mapStateToProps, {
    addPost,
    postChange
})(MyPost)