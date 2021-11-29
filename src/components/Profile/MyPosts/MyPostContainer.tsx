import { addPost }      from "../../../Redux/profileReducer";
import { MyPost }       from "./MyPost";
import { connect }      from "react-redux";
import { AppStateType } from "../../../Redux/redux-store";
import { PostType }     from "../../../types/types";


const mapStateToProps = (state: AppStateType): MatStateToPropsType => {
    return {
        posts: state.profilePage.post,
    }
}

export const MyPostContainer = connect(mapStateToProps, {
    addPost,
})(MyPost)

//types
type MatStateToPropsType = {
    posts: Array<PostType>,
}