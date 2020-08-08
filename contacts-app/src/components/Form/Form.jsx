import React from "react";
import Button from "./../Button/Button";
import styles from "./Form.module.css";

class Form extends React.Component {
  render() {
    return (
      <form className={`${styles.card} ${styles["card--form"]}`}>
        <label for="firstName" className={styles.input__label}>
          First name
        </label>
        <input type="text" id="firstName" className={styles.input}></input>

        <label for="lastName" className={styles.input__label}>
          Last name
        </label>
        <input type="text" id="lastName" className={styles.input}></input>

        <label for="company" className={styles.input__label}>
          Company
        </label>
        <input type="text" id="company" className={styles.input}></input>

        <label for="phone" className={styles.input__label}>
          Phone number
        </label>
        <input type="text" id="phone" className={styles.input}></input>

        <label for="email" className={styles.input__label}>
          Email
        </label>
        <input type="text" id="email" className={styles.input}></input>

        <Button type="primary" text="Save"></Button>
      </form>
    );
  }
}

export default Form;
