import React from 'react';
import styles from '../MyPosts.module.css';

type PostPropsType = {
    avatar: any
    message: string
    likesCount: number
}

const Post = (props: PostPropsType) => {
    return (
        <div className={styles.main}>
            <img
                src={props.avatar}
                className={styles.avatar}
                alt="users avatar"
            ></img>
            <div className={styles.item}>Message: {props.message}</div>
            <div className={styles.item}>Likes: {props.likesCount}</div>
        </div>
    );
};

export default Post;