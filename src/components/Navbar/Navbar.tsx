import React from "react";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.main}>
      <div className={styles.item}>
        <a>Profile</a>
      </div>
      <div className={styles.item}>
        <a>Messages</a>
      </div>
    </nav>
  );
};

export default Navbar;