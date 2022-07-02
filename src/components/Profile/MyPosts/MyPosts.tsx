import React from 'react';
import styles from './MyPosts.module.css';
import Post from './Post/Post';

type PostPropsType = {
    state: any
    avatar: string
    addPost: (postMessage: string) => void
    updateNewPostText: (newText: string) => void
}

const MyPosts = (props: PostPropsType) => {
    const postsElements = props.state.map((p: { avatar: string; message: string; likesCount: number }) => {
        return <Post
            avatar={p.avatar}
            message={p.message}
            likesCount={p.likesCount}
        />
    });

    const newPostElement = React.createRef();

    const addPostHandler = () => {
        const text = newPostElement.current.value;
        props.addPost(text);
    };

    const onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
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