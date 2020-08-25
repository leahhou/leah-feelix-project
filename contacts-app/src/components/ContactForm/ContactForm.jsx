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
      },
      invalidMessage: {
        firstName: "",
        lastName: "",
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
    this.validateContactForm();
    const { firstName, lastName, email } = this.state.invalidMessage;
    // firstName === "" &&
    //   lastName === "" &&
    //   email === "" &&
    //   this.props.addNewContact({
    //     ...this.state.newContact,
    //     id: this.props.contactId
    //   });
  };

  validateContactForm() {
    const { firstName, lastName, email } = this.state.newContact;
    const isEmailInvalid = /^\S+@\S+\.\S+$/.exec(email);
    // this.setState({
    //   invalidMessage: {
    //     firstName: firstName.trim() === "" ? "First name cannot be empty" : "",
    //     lastName: lastName.trim() === "" ? "Last name cannot be empty" : "",
    //     email: !isEmailInvalid ? "Invalid Email" : ""
    //   }
    // });
    if (firstName.trim() === "") {
      this.setState(
        {
          ...this.state.invalidMessage,
          invalidMessage: {
            firstName: "xxx"
          }
        },
        () => {
          console.log(
            this.state.invalidMessage.firstName + "check first name",
            this.state.invalidMessage
          );
        }
      );
    }
    if (lastName.trim() === "") {
      this.setState(
        {
          ...this.state.invalidMessage,
          invalidMessage: {
            lastName: "xxx"
          }
        },
        () => {
          console.log(
            this.state.invalidMessage.firstName + "check first name",
            this.state.invalidMessage
          );
        }
      );
    }
    // if (!isEmailInvalid) {
    //   this.setState({
    //     invalidMessage: {
    //       ...this.state.invalidMessage,
    //       email: "Invalid Email"
    //     }
    //   });
    //   console.log(
    //     this.state.invalidMessage.email + "email",
    //     this.state.invalidMessage
    //   );
    // }
    // console.log(this.state.invalidMessage.firstName + "none");
  }

  render() {
    return (
      <form className={`${styles.card} ${styles["card--form"]}`}>
        <Input
          htmlFor="firstName"
          type="text"
          label="First Name"
          invalidMessage={this.state.invalidMessage.firstName}
          handleInputChange={this.handleInputChange}
        ></Input>

        <Input
          htmlFor="lastName"
          type="text"
          label="Last Name"
          invalidMessage={this.state.invalidMessage.lastName}
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
          invalidMessage={this.state.invalidMessage.email}
          handleInputChange={this.handleInputChange}
        ></Input>
        <Button
          buttonType="primary"
          text="Save"
          handleClick={this.handleAddContact}
        ></Button>
      </form>
    );
  }
}

export default ContactForm;

const defaultImage = avatar1;
