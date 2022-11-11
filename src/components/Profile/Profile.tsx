import React from 'react';
import styles from './Profile.module.css';
import images from '../../images/images';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPosts from './MyPosts/MyPosts';
import {ProfilePropsType} from '../../App';

const Profile = (props: ProfilePropsType) => {
    return (
        <div className={styles.main}>
            <ProfileInfo
                name="Sasha"
                age="33"
                status="online"
                avatar={images.avatar}
            />
            <MyPosts
                avatar={images.avatar}
                posts={props.profilePage.profilePage.posts}
                newPostText={props.profilePage.profilePage.newPostText}
                dispatch={props.dispatch}
            />
        </div>
    );
};

export default Profile;