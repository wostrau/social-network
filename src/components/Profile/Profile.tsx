import React from 'react';
import styles from './Profile.module.css';
import images from '../../images/images';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import Post from './Post/Post';

const Profile = () => {
    return (
        <div className={styles.main}>
            <ProfileInfo
                name="Sasha"
                age="33"
                status="online"
                avatar={images.avatar}
            />
            <Post
                message="MY FIRST POST"
                likes="2"
                avatar={images.avatar}
            />
        </div>
    );
};

export default Profile;