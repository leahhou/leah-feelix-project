import React from "react";
import styles from "./Input.module.css";

class Input extends React.Component {
  render() {
    const htmlFor = this.props.htmlFor;
    const label = this.props.label;
    const type = this.props.type;
    return (
      <>
        <label htmlFor={htmlFor} className={styles.input__label}>
          {label}
        </label>
        <input
          type={type}
          id={htmlFor}
          className={styles.input}
          onChange={this.props.handleInputChange}
        ></input>
      </>
    );
  }
}

export default Input;
