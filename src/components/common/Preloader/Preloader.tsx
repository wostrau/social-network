import React from 'react';
import userPhoto1 from '../../../assets/images/photographer1.png';
import styles from '../../Users/Users.module.css';

const Preloader = () => {
    return (
        <div className={styles.usersPhoto}>
            <img src={userPhoto1} alt='PRELOADER'/>
        </div>
    );
};

export default Preloader;