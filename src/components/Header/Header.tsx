import React from 'react';
import styles from './Header.module.css';
import images from '../../images/images';
import {NavLink} from 'react-router-dom';

type PropsType = {
    setAuthUserData: (userId: any, email: string, login: string) => void
    userId: null | any
    email: null | any
    login: null | any
    isAuth: boolean
};

const Header = (props: PropsType) => {
    return (
        <header className={styles.main}>
            <div className={styles.item}>
                <img src={images.logo} className={styles.logo} alt="logo"/>
                SOCIAL NETWORK STUDENTS PROJECT FROM SAMURAI WAY REACT COURSE
            </div>
            <div className={styles.loginBlock}>
                {props.isAuth ? <NavLink to={'/login'}>LOGIN</NavLink> : false}
            </div>
        </header>
    );
};

export default Header;