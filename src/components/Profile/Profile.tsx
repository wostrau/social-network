import React from 'react';
import styles from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import {MyPostsContainer} from './MyPosts/MyPostsContainer';

type PropsType = {
    profile: any;
    status: string;
};

const Profile = (props: PropsType) => {
    return (
        <div className={styles.main}>
            <ProfileInfo
                profile={props.profile}
                status={props.status}
            />
            <MyPostsContainer/>
        </div>
    );
};

export default Profile;