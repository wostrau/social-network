import React from "react";
import styles from './Header.module.css';
import images from "../../images/images";

const Header = () => {
  return (
    <div className={styles.main}>
      <div className={styles.item}>
        <img src={images.logo} className={styles.logo} alt='logo' />
        SOCIAL NETWORK STUDENTS PROJECT FROM SAMURAI WAY REACT COURSE
      </div>
    </div>
  );
};

export default Header;