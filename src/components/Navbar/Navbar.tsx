import React from "react";
import styles from "./Navbar.module.css";
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className={styles.main}>
            <div className={styles.item}>
                <NavLink
                    to='/profile'
                    activeClassName={styles.activeLink}>Profile</NavLink>
            </div>
            <div className={styles.item}>
                <NavLink
                    to='/dialogs'
                    activeClassName={styles.activeLink}>Messages</NavLink>
            </div>
        </nav>
    );
};

export default Navbar;