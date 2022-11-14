import React from 'react';
import {ActionType} from '../../../redux/store';
import {addPostActionCreator, updateNewPostTextActionCreator} from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';

type MyPostsContainerPropsType = {
    dispatch: (a: ActionType) => void
    store: any
};

const MyPostsContainer = (props: MyPostsContainerPropsType) => {
    const state = props.store.getState();

    const addPost = () => {
        props.dispatch(addPostActionCreator());
    };
    const onPostChange = (text: any) => {
        const action = updateNewPostTextActionCreator(text);
        props.dispatch(action);
    };

    return (
        <MyPosts
            updateNewPostText={onPostChange}
            addPost={addPost}
            posts={state.profilePage.posts}
            newPostText={state.profilePage.newPostText}
        />
    )
};

export default MyPostsContainer;