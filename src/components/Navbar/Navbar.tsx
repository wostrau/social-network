import React from 'react';
import styles from './Navbar.module.css';
import {NavLink} from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className={styles.main}>
            <div className={styles.item}>
                <NavLink
                    to="/profile"
                    /*className={styles.activeLink}*/
                >Profile</NavLink>
            </div>
            <div className={styles.item}>
                <NavLink
                    to="/dialogs"
                    /*className={styles.activeLink}*/
                >Dialogs</NavLink>
            </div>
            <div className={styles.item}>
                <NavLink
                    to="/users"
                    /*className={styles.activeLink}*/
                >Users</NavLink>
            </div>
        </nav>
    );
};

export default Navbar;