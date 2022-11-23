import React from 'react';
import userPhoto1 from '../../../assets/images/photographer1.png';
import styles from '../../Users/Users.module.css';

type PropsType = {

}

const Preloader = (props: PropsType) => {
    return (
        <div className={styles.usersPhoto}>
            <img src={userPhoto1} alt='PRELOADER'/>
        </div>
    );
};

export default Preloader;