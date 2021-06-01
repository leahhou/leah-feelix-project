import React from "react";
import styles from "./Input.module.css";
import PropTypes from "prop-types";
import shortId from "shortid";

class Input extends React.Component {
  render() {
    const label = this.props.label;
    const type = this.props.type;
    const id = this.props.htmlFor || shortId.generate();
    const invalidMessage = this.props.invalidMessage;

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
        <span className={styles.invalidMessage}>{invalidMessage}</span>
      </>
    );
  }
}

Input.propTypes = {
  htmlFor: PropTypes.string,
  type: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.string,
  invalidMessage: PropTypes.string,
  handleInputChange: PropTypes.func
};
export default Input;
