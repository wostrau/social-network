import React from 'react';
import styles from './Profile.module.css';
import images from '../../images/images';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import Post from './Post/Post';



const Profile = (props: any) => {
    return (
        <div className={styles.main}>
            <ProfileInfo
                name="Sasha"
                age="33"
                status="online"
                avatar={images.avatar}
            />
            <Post
                state={props.state.posts}
                avatar={images.avatar}
            />
        </div>
    );
};

export default Profile;