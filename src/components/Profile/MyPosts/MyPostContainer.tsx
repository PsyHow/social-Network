import { addPost, PostType } from "../../../Redux/profileReducer";
import MyPost                 from "./MyPost";
import { connect }            from "react-redux";
import { AppStateType }       from "../../../Redux/redux-store";


type MatStateToPropsType = {
    posts: PostType[],
}

const mapStateToProps = (state: AppStateType): MatStateToPropsType => {
    return {
        posts: state.profilePage.post,
    }
}

export const MyPostContainer = connect(mapStateToProps, {
    addPost
})(MyPost)