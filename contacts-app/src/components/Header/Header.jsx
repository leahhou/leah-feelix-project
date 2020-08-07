import React from "react";
import styles from "./Header.module.css";
import Button from "./../Button/Button";

class Header extends React.Component {
  render() {
    return (
      <div className={styles.base}>
        <h1>My contacts</h1>
        <Button type="primary" text="Add"></Button>
      </div>
    );
  }
}

export default Header;
