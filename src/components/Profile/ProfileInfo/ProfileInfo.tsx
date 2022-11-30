import React from 'react';
import styles from './ProfileInfo.module.css';
import Preloader from '../../common/Preloader/Preloader';
import ProfileStatus from '../ProfileStatus/ProfileStatus';
import ProfileStatusWithHooks from '../ProfileStatus/ProfileStatusWithHooks';

export type PropsType = {
    profile: any;
    status: string;
    updateUserStatusTC: (status: string) => void;
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
            <ProfileStatusWithHooks
                profile={props.profile}
                status={props.status}
                updateUserStatusTC={props.updateUserStatusTC}
            />
            <div>DESCRIPTION</div>
        </div>
    )
};

export default ProfileInfo;