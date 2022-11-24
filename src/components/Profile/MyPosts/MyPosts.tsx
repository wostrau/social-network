import React, {ChangeEvent} from 'react';
import styles from './MyPosts.module.css';
import Post from './Post/Post';

type MyPostsPropsType = {
    posts: any
    addPost: any
    updateNewPostText: any
}

const MyPosts = (props: MyPostsPropsType) => {
    const postsElements = props.posts.map((p: { avatar: any; message: string; likesCount: number; }, index: React.Key | null | undefined) => {
        return <Post
            key={index}
            avatar={p.avatar}
            message={p.message}
            likesCount={p.likesCount}
        />
    });

    const onAddPost = () => {
        props.addPost();
    };

    const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        const text = e.currentTarget.value;
        props.updateNewPostText(text);
    };

    return (
        <div className={styles.main}>
            <h3>My posts</h3>
            <div className={styles.item}>
                <textarea
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