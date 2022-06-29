import React from "react";
import styles from './ProfileInfo.module.css';
import images from "../../../images/images";

type profileInfoPropsType = {
    name: string
    age: string
    status: string
    avatar: string
}

const ProfileInfo = (props: profileInfoPropsType) => {
    return (
        <div className={styles.item}>
            <img
                src={images.avatar}
                className={styles.avatar}
                alt="users avatar"
            ></img>
            <div>{props.name}</div>
            <div>{props.age}</div>
            <div>{props.status}</div>
        </div>
    )
};

export default ProfileInfo;