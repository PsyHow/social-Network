import { FC, memo } from 'react';

import { AddPostForm, FormPostDataType } from './AddPostForm/AddPostForm';
import styles from './MyPosts.module.css';
import { Post } from './Post/Post';

import { PostType } from 'types';

export const MyPost: FC<PropsType> = memo(({ posts, addPost }) => {
  const myPosts = posts.map(p => (
    <Post key={p.id} message={p.message} likesCount={p.likesCount} />
  ));

  const addNewPost = (formData: FormPostDataType) => {
    addPost(formData.newPostMessage);
  };

  return (
    <div>
      <div className={styles.posts}>{myPosts}</div>
      <AddPostForm onSubmit={addNewPost} />
    </div>
  );
});

// types
type PropsType = {
  addPost: (newPostMessage: string) => void;
  posts: PostType[];
};
