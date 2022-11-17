import React from 'react';
import styles from './Profile.module.css';
import images from '../../images/images';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import {MyPostsContainer} from './MyPosts/MyPostsContainer';

const Profile = () => {
    return (
        <div className={styles.main}>
            <ProfileInfo
                name="Sasha"
                age="33"
                status="online"
                avatar={images.avatar}
            />
            <MyPostsContainer/>
        </div>
    );
};

export default Profile;