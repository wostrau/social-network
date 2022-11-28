import React from 'react';
import styles from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import {MyPostsContainer} from './MyPosts/MyPostsContainer';

export type PropsType = {
    profile: any;
    status: string;
    updateUserStatusTC: (status: string) => void;
};

const Profile = (props: PropsType) => {
    return (
        <div className={styles.main}>
            <ProfileInfo
                profile={props.profile}
                status={props.status}
                updateUserStatusTC={props.updateUserStatusTC}
            />
            <MyPostsContainer/>
        </div>
    );
};

export default Profile;