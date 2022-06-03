import React from "react";
import images from "../../images/images";
import Post from "./Post/Post";
import styles from './Profile.module.css';

const Profile = () => {
  return (
    <div className={styles.main}>
      <div className={styles.item}>name</div>
      <div className={styles.item}>age</div>
      <div className={styles.item}>status</div>
      <Post message="MY FIRST POST" likes="2" avatar={images.avatar}/>
    </div>
  );
};

export default Profile;