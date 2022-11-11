import React from 'react';
import styles from './Profile.module.css';
import images from '../../images/images';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPosts from './MyPosts/MyPosts';
import {ActionType, ProfilePageType} from '../../redux/state';

type ProfilePropsType = {
    profilePage: ProfilePageType
    dispatch: (a: ActionType) => void
}

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
                posts={props.profilePage.posts}
                newPostText={props.profilePage.newPostText}
                dispatch={props.dispatch}
            />
        </div>
    );
};

export default Profile;