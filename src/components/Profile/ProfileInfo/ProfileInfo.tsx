import React from 'react';
import styles from './ProfileInfo.module.css';
import Preloader from '../../common/Preloader/Preloader';
import ProfileStatus from '../ProfileStatus/ProfileStatus';

type PropsType = {
    profile: any;
    status: string;
};

const ProfileInfo = (props: PropsType) => {
    if (!props.profile) {
        return <Preloader/>
    }

    return (
        <div className={styles.item}>
            <img
                src={props.profile.photos.large}
                className={styles.avatar}
                alt='USER'
            ></img>
            <ProfileStatus
                profile={props.profile}
                status={props.status}
            />
            <div>DESCRIPTION</div>
        </div>
    )
};

export default ProfileInfo;