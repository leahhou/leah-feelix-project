import React from "react";
import Button from "./../Button/Button";
import styles from "./Form.module.css";
import Contact from "../Contact/Contact";

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
    //Q1: why the input is out of sync when console.log?
    const update = {};
    update[event.target.id] = event.target.value;
    this.setState({
      newContact: { ...this.state.newContact, ...update }
    });
    console.log(this.state.newContact);
  };
  render() {
    const form = this.state.newContact;
    return (
      <form className={`${styles.card} ${styles["card--form"]}`}>
        <label for="firstName" className={styles.input__label}>
          First name
        </label>
        <input
          type="text"
          id="firstName"
          className={styles.input}
          onChange={this.handleFormChange}
        ></input>

        <label for="lastName" className={styles.input__label}>
          Last name
        </label>
        <input
          type="text"
          id="lastName"
          className={styles.input}
          onChange={this.handleFormChange}
        ></input>

        <label for="company" className={styles.input__label}>
          Company
        </label>
        <input
          type="text"
          id="company"
          className={styles.input}
          onChange={this.handleFormChange}
        ></input>

        <label for="phone" className={styles.input__label}>
          Phone number
        </label>
        <input
          type="text"
          id="phone"
          className={styles.input}
          onChange={this.handleFormChange}
        ></input>

        <label for="email" className={styles.input__label}>
          Email
        </label>
        <input
          type="text"
          id="email"
          className={styles.input}
          onChange={this.handleFormChange}
        ></input>

        <button
          onClick={event => {
            this.props.onContactChange(event, this.state.newContact);
          }}
        >
          save
        </button>
        {this.state.newContact.firstName}
        {this.state.newContact.lastName}
        {/* <Button type="primary" text="Save"></Button> */}
      </form>
    );
  }
}

export default Form;
