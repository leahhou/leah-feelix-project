import React from "react";
import styles from "./Input.module.css";

class Input extends React.Component {
  render() {
    const label = this.props.label;
    const type = this.props.type;
    const id = this.props.htmlFor;
    const invalidMessage = this.props.invalidMessage;
    // const id = this.props.htmlFor || shortId.generate();
    return (
      <>
        <label htmlFor={id} className={styles.input__label}>
          {label}
        </label>
        <input
          type={type}
          id={id}
          className={styles.input}
          onChange={this.props.handleInputChange}
          value={this.props.value}
        ></input>
        <span className={id}>{invalidMessage}</span>
      </>
    );
  }
}

export default Input;
