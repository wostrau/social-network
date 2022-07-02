import React from 'react';
import ts from 'typescript';
import styles from './MyPosts.module.css';
import Post from './Post/Post';

type PostPropsType = {
    state: any
    avatar: string
}

export const MyPosts = (props: PostPropsType) => {
    const postsElements = props.state.map((p: {avatar: string; message: string; likesCount: number}) => <Post
        avatar={p.avatar}
        message={p.message}
        likesCount={p.likesCount}
        />
)

    const onClickHandler = () => {
        
    };

    return (
        <div className={styles.main}>
            <h3>MY NEW POST</h3>
            <div className={styles.item}>
                <textarea></textarea>
            </div>
            <div className={styles.item}>
                <button
                    onClick={onClickHandler}
                >Add post</button>
            </div>
            {postsElements}
        </div>
    );
};

export default MyPosts;