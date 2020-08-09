import React from "react";
import Button from "./../Button/Button";
import styles from "./Form.module.css";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newContact: {
        firstName: "",
        lastName: "",
        company: "",
        phone: "",
        email: ""
      }
    };
  }

  handleFormChange = event => {
    const update = {};
    update[event.target.id] = event.target.value;
    this.setState({
      newContact: { ...this.state.newContact, ...update }
    });
    //Q1: why the input is out of sync when console.log?
    // console.log("🥳", this.state.newContact);
  };
  render() {
    const form = this.state.newContact;
    return (
      <form className={`${styles.card} ${styles["card--form"]}`}>
        <label htmlFor="firstName" className={styles.input__label}>
          First name
        </label>
        <input
          type="text"
          id="firstName"
          className={styles.input}
          onChange={this.handleFormChange}
        ></input>

        <label htmlFor="lastName" className={styles.input__label}>
          Last name
        </label>
        <input
          type="text"
          id="lastName"
          className={styles.input}
          onChange={this.handleFormChange}
        ></input>

        <label htmlFor="company" className={styles.input__label}>
          Company
        </label>
        <input
          type="text"
          id="company"
          className={styles.input}
          onChange={this.handleFormChange}
        ></input>

        <label htmlFor="phone" className={styles.input__label}>
          Phone number
        </label>
        <input
          type="text"
          id="phone"
          className={styles.input}
          onChange={this.handleFormChange}
        ></input>

        <label htmlFor="email" className={styles.input__label}>
          Email
        </label>
        <input
          type="text"
          id="email"
          className={styles.input}
          onChange={this.handleFormChange}
        ></input>

        <Button
          type="primary"
          text="Save"
          handleClick={event => {
            this.props.onContactChange(event, this.state.newContact);
          }}
        ></Button>
      </form>
    );
  }
}

export default Form;
