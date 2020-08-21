import React from "react";
import styles from "./Button.module.css";
import classNames from "classnames";

class Button extends React.Component {
  render() {
    const type = this.props.type;
    const text = this.props.text;
    return (
      <button
        onClick={event => {
          this.props.handleClick(event);
        }}
        name={text}
        className={classNames(styles.button, styles[type])}
      >
        {text}
      </button>
    );
  }
}

export default Button;
