import React from 'react';
import styles from './ProfileInfo.module.css';
import Preloader from '../../common/Preloader/Preloader';

type PropsType = {
    profile: any;
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
            <div>DESCRIPTION</div>
        </div>
    )
};

export default ProfileInfo;