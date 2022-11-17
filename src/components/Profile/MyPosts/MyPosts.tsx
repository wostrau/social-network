import React from 'react';
import styles from './MyPosts.module.css';
import Post from './Post/Post';

type MyPostsPropsType = {
    state: any
    addPost: any
    updateNewPostText: any

}

const MyPosts = (props: MyPostsPropsType) => {
    const postsElements = props.state.map((p: { avatar: any; message: string; likesCount: number; }) => {
        return <Post
            avatar={p.avatar}
            message={p.message}
            likesCount={p.likesCount}
        />
    });

    const newPostElement = React.createRef();

    const onAddPost = () => {
        props.addPost();
    };

    const onPostChange = () => {
        const text = newPostElement.current.value;
        props.updateNewPostText(text);
    };

    return (
        <div className={styles.main}>
            <h3>My posts</h3>
            <div className={styles.item}>
                <textarea
                    ref={newPostElement}
                    onChange={onPostChange}
                ></textarea>
            </div>
            <div className={styles.item}>
                <button
                    onClick={onAddPost}
                >Add post
                </button>
            </div>
            {postsElements}
        </div>
    );
};

export default MyPosts;