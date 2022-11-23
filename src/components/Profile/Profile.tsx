import React from 'react';
import styles from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import {MyPostsContainer} from './MyPosts/MyPostsContainer';

type PropsType = {
    profile: any;
};

const Profile = (props: PropsType) => {
    return (
        <div className={styles.main}>
            <ProfileInfo
                profile={props.profile}
            />
            <MyPostsContainer/>
        </div>
    );
};

export default Profile;