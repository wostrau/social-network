import React from 'react';
import styles from './Header.module.css';
import images from '../../images/images';
import {NavLink} from 'react-router-dom';

type PropsType = {
    isAuth: boolean;
    login: string;
    logoutUserTC: () => void;
};

const Header = (props: PropsType) => {
    return (
        <header className={styles.main}>
            <div className={styles.item}>
                <img src={images.logo} className={styles.logo} alt="logo"/>
                SOCIAL NETWORK STUDENTS PROJECT FROM SAMURAI WAY REACT COURSE
            </div>
            <div className={styles.loginBlock}>
                {props.isAuth
                    ? <div>{props.login} - <button onClick={props.logoutUserTC}>LOGOUT</button></div>
                    : <NavLink to={'/login'}>LOGIN</NavLink>}
            </div>
        </header>
    );
};

export default Header;