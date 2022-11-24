import React from 'react';
import styles from './Header.module.css';
import images from '../../images/images';
import {NavLink} from 'react-router-dom';

const HeaderContainer extends React.Component {
    render() {
        return (
            <header className={styles.main}>
                <div className={styles.item}>
                    <img src={images.logo} className={styles.logo} alt="logo"/>
                    SOCIAL NETWORK STUDENTS PROJECT FROM SAMURAI WAY REACT COURSE
                </div>
                <div className={styles.loginBlock}>
                    <NavLink to={'/login'}>LOGIN</NavLink>
                </div>
            </header>
        );
    }
}

export default HeaderContainer;