import React from 'react';
import styles from './MyPosts.module.css';
import Post from './Post/Post';
import {ActionType} from '../../../redux/state';

type PostMessage = {
    avatar: string
    message: string
    likesCount: number
}
type PostPropsType = {
    state: Array<PostMessage>
    avatar: string
    dispatch: (a: ActionType) => void
}

//action creators
const addPostActionCreator = (newText: string) => {
    return {type: 'ADD-POST', newText: newText};
};
const updateNewPostTextActionCreator = (newText: string) => {
    return {type: 'UPDATE-NEW-POST-TEXT', newText: newText};
};


const MyPosts = (props: PostPropsType) => {
    const postsElements = props.state.map(p => {
        return <Post
            avatar={p.avatar}
            message={p.message}
            likesCount={p.likesCount}
        />
    });

    const newPostElement = React.createRef();

    const addPostHandler = () => {
        const text = newPostElement.current.value;
        //const action = {type: 'ADD-POST', newText: text};
        props.dispatch(addPostActionCreator(text));
    };

    const onPostChange = () => {
        const text = newPostElement.current.value;
        //const action = {type: 'UPDATE-NEW-POST-TEXT', newText: text};
        props.dispatch(updateNewPostTextActionCreator(text));
    };

    return (
        <div className={styles.main}>
            <h3>MY NEW POST</h3>
            <div className={styles.item}>
                <textarea
                    ref={newPostElement}
                    onChange={onPostChange}
                ></textarea>
            </div>
            <div className={styles.item}>
                <button
                    onClick={addPostHandler}
                >Add post
                </button>
            </div>
            {postsElements}
        </div>
    );
};

export default MyPosts;