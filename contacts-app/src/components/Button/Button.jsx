import React from "react";
import styles from "./Button.module.css";
import classNames from "classnames";

class Button extends React.Component {
  render() {
    const buttonType = this.props.buttonType;
    const text = this.props.text;
    const type = this.props.type;
    return (
      <button
        type={type}
        onClick={event => {
          this.props.handleClick(event);
        }}
        name={text}
        className={classNames(styles.button, styles[buttonType])}
      >
        {text}
      </button>
    );
  }
}

export default Button;
