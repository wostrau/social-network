import React from "react";
import styles from './Post.module.css';

const Post = (props: any) => {
    return (
        <div className={styles.main}>
            <h3>MY NEW POST</h3>
            <div className={styles.item}>
                <textarea></textarea>
            </div>
            <div className={styles.item}>
                <button>Add post</button>
            </div>
            <img
                src={props.avatar}
                className={styles.avatar}
                alt="users avatar"
            ></img>
            <div className={styles.item}>Message: {props.message}</div>
            <div className={styles.item}>Likes: {props.likes}</div>
        </div>
    )
}

export default Post;