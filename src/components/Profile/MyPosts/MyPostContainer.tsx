import { connect } from 'react-redux';

import { MyPost } from './MyPost';

import { addPost, AppStateType } from 'BLL';
import { PostType } from 'types';

const mapStateToProps = (state: AppStateType): MatStateToPropsType => ({
  posts: state.profilePage.post,
});

export const MyPostContainer = connect(mapStateToProps, {
  addPost,
})(MyPost);

// types
type MatStateToPropsType = {
  posts: PostType[];
};
