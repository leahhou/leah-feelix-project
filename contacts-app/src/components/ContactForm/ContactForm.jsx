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
    console.log(this.state.invalidMessage);
    console.log(firstName === "");
    console.log(lastName === "");
    console.log(email === "");
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
    //regex for validate email with @, domain and no space.
    const isEmailInvalid = /^\S+@\S+\.\S+$/.exec(email);
    this.setState({
      invalidMessage: {
        firstName: firstName.trim() === "" ? "First name cannot be empty" : "",
        lastName: lastName.trim() === "" ? "Last name cannot be empty" : "",
        email: !isEmailInvalid ? "Invalid Email" : ""
      }
    });

    //Comments below are lesson learnt to use previousState when calling
    // setState multiple times in 1 function coz it might lead to competing state updates,
    // thus, not update state as expected.
    // if (firstName.trim() === "") {
    //   this.setState(
    //     prevState => ({
    //       invalidMessage: {
    //         ...prevState.invalidMessage,
    //         firstName: "First Name cannot be empty"
    //       }
    //     }),
    //     () => {
    //       console.log("check first name", this.state.invalidMessage);
    //     }
    //   );
    // }
    // if (lastName.trim() === "") {
    //   this.setState(
    //     prevState => ({
    //       invalidMessage: {
    //         ...prevState.invalidMessage,
    //         lastName: "First Name cannot be empty"
    //       }
    //     }),
    //     () => {
    //       console.log("check last name", this.state.invalidMessage);
    //     }
    //   );
    // }
  }

  render() {
    return (
      <form className={`${styles.card} ${styles["card--form"]}`}>
        {this.state.invalidMessage.firstName}
        {this.state.invalidMessage.lastName}
        {this.state.invalidMessage.email}
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
