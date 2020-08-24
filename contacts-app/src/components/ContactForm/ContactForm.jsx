import React from "react";
import Button from "../Button/Button";
import Input from "../Input/Input";
import styles from "./ContactForm.module.css";
import avatar1 from "./../../avatar-1.png";

class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newContact: {
        image: defaultImage,
        firstName: "",
        lastName: "",
        companyName: "",
        phone: "",
        email: ""
      }
    };
  }

  handleInputChange = event => {
    const update = {};
    update[event.target.id] = event.target.value;
    this.setState({
      newContact: { ...this.state.newContact, ...update }
    });
  };

  handleAddContact = event => {
    event.preventDefault(); // to prevent refresh the page
    const validated = this.validateContactForm();
    // const validated = true;
    validated &&
      this.props.addNewContact({
        ...this.state.newContact,
        id: this.props.contactId
      });
  };

  validateContactForm() {
    const { firstName, lastName, email } = this.state.newContact;

    if (firstName.trim() === "" || lastName.trim() === "") {
      const invalidFirstName = document.getElementsByClassName("firstName");
      const invalidLastName = document.getElementsByClassName("lastName");
      this.displayRequiredFieldMessage(invalidFirstName[0]);
      this.displayRequiredFieldMessage(invalidLastName[0]);
      return false;
    }
    const isEmailInvalid = /^\S+@\S+\.\S+$/.exec(email);
    if (isEmailInvalid === null) {
      const invalidEmail = document.getElementsByClassName("email");
      invalidEmail[0].innerHTML = "Email is in invalid form. ";
      return false;
    }
    return true;
  }

  displayRequiredFieldMessage(element) {
    element.innerHTML = "This field cannot be empty.";
  }

  render() {
    return (
      <form className={`${styles.card} ${styles["card--form"]}`}>
        <Input
          htmlFor="firstName"
          type="text"
          label="First Name"
          handleInputChange={this.handleInputChange}
        ></Input>

        <Input
          htmlFor="lastName"
          type="text"
          label="Last Name"
          handleInputChange={this.handleInputChange}
        ></Input>

        <Input
          htmlFor="companyName"
          type="text"
          label="Company"
          handleInputChange={this.handleInputChange}
        ></Input>

        <Input
          htmlFor="phone"
          type="tel"
          label="Phone number"
          handleInputChange={this.handleInputChange}
        ></Input>

        <Input
          htmlFor="email"
          type="email"
          label="Email"
          handleInputChange={this.handleInputChange}
        ></Input>
        {/* <Input type="submit" value="save"></Input> */}
        <Button
          type="primary"
          text="Save"
          handleClick={this.handleAddContact}
        ></Button>
      </form>
    );
  }
}

export default ContactForm;

const defaultImage = avatar1;
