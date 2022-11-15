import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';
import {StoreContext} from '../../../StoreContext';

/*type MyPostsContainerPropsType = {
    dispatch: (a: ActionType) => void
    store: any
};*/

const MyPostsContainer = () => {
    /*const state = props.store.getState();
    const addPost = () => {
        props.dispatch(addPostActionCreator());
    };
    const onPostChange = (text: any) => {
        const action = updateNewPostTextActionCreator(text);
        props.dispatch(action);
    };*/

    return (
        <StoreContext.Consumer>
            {(store) => {
                const addPost = () => {
                    store.dispatch(addPostActionCreator());
                };
                const onPostChange = (text: any) => {
                    const action = updateNewPostTextActionCreator(text);
                    store.dispatch(action);
                };

                return <MyPosts
                    updateNewPostText={onPostChange}
                    addPost={addPost}
                    posts={store.getState().profilePage.posts}
                    newPostText={store.getState().profilePage.newPostText}
                />
            }}
        </StoreContext.Consumer>
    )
};

export default MyPostsContainer;