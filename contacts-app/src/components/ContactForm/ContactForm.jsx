import React from "react";
import Button from "../Button/Button";
import Input from "../Input/Input";
import styles from "./ContactForm.module.css";
import avatar1 from "./../../avatar-1.png";
import PropTypes from "prop-types";

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
        phone: "",
        email: ""
      }
    };
  }

  handleInputChange = event => {
    const update = {};
    const inputId = event.target.id;
    const inputValue = event.target.value;
    if (inputId === "First Name" || "Last Name") {
      update[inputId] =
        inputValue.charAt(0).toUpperCase() + inputValue.slice(1);
    } else {
      update[inputId] = inputValue;
    }
    this.setState({
      newContact: { ...this.state.newContact, ...update }
    });
  };

  handleAddContact = event => {
    event.preventDefault(); // to prevent refresh the page
    const isContactFormInvalid = this.validateContactForm();
    !isContactFormInvalid &&
      this.props.addNewContact({
        ...this.state.newContact,
        id: this.props.contactId
      });
  };

  validateContactForm() {
    const { firstName, lastName, phone, email } = this.state.newContact;
    //regex for validate email with @, domain and no space.
    const isEmailInvalid = /^\S+@\S+\.\S+$/.exec(email) === null;
    const isFirstNameInvalid = firstName.trim() === "";
    const isLastNameInvalid = lastName.trim() === "";
    //regex for validate email xxx-xxx-xxxx  or xxx xxx xxxx format
    const phoneRegex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    const isPhoneInvalid = !phoneRegex.test(phone);
    this.setState({
      invalidMessage: {
        firstName: isFirstNameInvalid ? "First name cannot be empty" : "",
        lastName: isLastNameInvalid ? "Last name cannot be empty" : "",
        phone: isPhoneInvalid
          ? "Invalid phone number, please enter number in xxx-xxx-xxxx or xxx xxx xxxx format"
          : "",
        email: isEmailInvalid ? "Invalid Email" : ""
      }
    });
    if (
      isFirstNameInvalid &&
      isLastNameInvalid &&
      isPhoneInvalid &&
      isEmailInvalid
    )
      return true;
    if (isFirstNameInvalid) return true;
    if (isLastNameInvalid) return true;
    if (isPhoneInvalid) return true;
    if (isEmailInvalid) return true;
  }

  render() {
    const {
      firstName,
      lastName,
      company,
      phone,
      email
    } = this.state.newContact;
    return (
      <form className={`${styles.card} ${styles["card--form"]}`}>
        <Input
          htmlFor="firstName"
          type="text"
          label="First Name"
          invalidMessage={this.state.invalidMessage.firstName}
          handleInputChange={this.handleInputChange}
          value={firstName}
        />

        <Input
          htmlFor="lastName"
          type="text"
          label="Last Name"
          invalidMessage={this.state.invalidMessage.lastName}
          handleInputChange={this.handleInputChange}
          value={lastName}
        />

        <Input
          htmlFor="companyName"
          type="text"
          label="Company"
          handleInputChange={this.handleInputChange}
          value={company}
        />

        <Input
          htmlFor="phone"
          type="tel"
          label="Phone number"
          invalidMessage={this.state.invalidMessage.phone}
          handleInputChange={this.handleInputChange}
          value={phone}
        />

        <Input
          htmlFor="email"
          type="email"
          label="Email"
          invalidMessage={this.state.invalidMessage.email}
          handleInputChange={this.handleInputChange}
          value={phone}
        />
        <Button
          buttonType="primary"
          text="Save"
          handleClick={this.handleAddContact}
          value={email}
        ></Button>
      </form>
    );
  }
}

ContactForm.propTypes = {
  addNewContact: PropTypes.func,
  contactId: PropTypes.number
};

export default ContactForm;

const defaultImage = avatar1;

//Comments below are lesson learnt to use previousState when calling
// setState multiple times in 1 function(validateContactForm) coz it might lead to competing state updates,
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
