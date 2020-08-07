import React from "react";
import styles from "./Header.module.css";

class Header extends React.Component {
  render() {
    return (
      <div className={styles.header}>
        <h1>My contacts</h1>
        <a
          className={`${styles.button} ${styles.button__primary} ${styles.header__button}`}
        >
          Add
        </a>
      </div>
    );
  }
}

export default Header;
