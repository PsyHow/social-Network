import { addPost, deletePost, profileReducer } from "./profileReducer";
import { PostType, UserProfileType } from "../types/types";

let state = {
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

test('length of posts should be incremented', ()=> {

    //test data
    const action = addPost('New post added correctly');

    //action
    const newState = profileReducer(state,action);

    //expectation
    expect(newState.post.length).toBe(5);
})

test('message of new post should be correct', ()=> {

    //test data
    const action = addPost('New post added correctly');

    //action
    const newState = profileReducer(state,action);

    //expectation
    expect(newState.post[4].message).toBe('New post added correctly')
})

test('after deleting length of messages should be decrement', () => {

    const action = deletePost(1);

    const newState = profileReducer(state,action);

    expect(newState.post.length).toBe(3);
})
