import React from "react";
import styles from "./Button.module.css";
import classNames from "classnames";

class Button extends React.Component {
  handleAddContact = (event, newContact) => {
    event.preventDefault(); //this is to prevent refresh the page
    this.props.addNewContact(newContact);
  };
  render() {
    const type = this.props.type;
    const text = this.props.text;
    return (
      <button
        onClick={event => {
          this.handleAddContact(event, this.props.newContact);
        }}
        className={classNames(styles.button, styles[type])}
      >
        {text}
      </button>
    );
  }
}

export default Button;
