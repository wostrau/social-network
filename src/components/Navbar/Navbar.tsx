import React from 'react';
import styles from './Navbar.module.css';
import {NavLink} from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className={styles.main}>
            <div className={styles.item}>
                <NavLink
                    to="/profile"
                    className={({isActive}) => styles.activeLink}
                >Profile</NavLink>
            </div>
            <div className={styles.item}>
                <NavLink
                    to="/dialogs"
                    className={({isActive}) => styles.activeLink}
                >Messages</NavLink>
            </div>
            <div className={styles.item}>
                <NavLink
                    to="/users"
                    className={({isActive}) => styles.activeLink}
                >Users</NavLink>
            </div>
            <div className={styles.item}>
                <a href={''}>News</a>
            </div>
            <div className={styles.item}>
                <a href={''}>Music</a>
            </div>
            <div className={styles.item}>
                <a href={''}>Settings</a>
            </div>
        </nav>
    );
};

export default Navbar;