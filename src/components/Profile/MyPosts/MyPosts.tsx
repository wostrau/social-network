import React from 'react';
import styles from './MyPosts.module.css';
import Post from './Post/Post';
import {Field, reduxForm} from 'redux-form';

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

    const onAddPost = (values: any) => {
        props.addPost(values.newPostText);
    };

    return (
        <div className={styles.main}>
            <h3>My posts</h3>
            <AddNewPostFormRedux
                onSubmit={onAddPost}
            />
            <div>
                {postsElements}
            </div>
        </div>
    );
};

const AddNewPostForm = (props: any) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div className={styles.item}>
                <Field
                    name={'newPostText'}
                    component={'textarea'}
                />
            </div>
            <div className={styles.item}>
                <button>Add post</button>
            </div>
        </form>
    );
};

const AddNewPostFormRedux = reduxForm({
    form: 'ProfileAddNewPostForm'
})(AddNewPostForm);

export default MyPosts;