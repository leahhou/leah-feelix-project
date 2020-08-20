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
    this.props.addNewContact({
      id: this.props.contactId,
      ...this.state.newContact
    });
  };
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
          type="text"
          label="Phone number"
          handleInputChange={this.handleInputChange}
        ></Input>

        <Input
          htmlFor="email"
          type="text"
          label="Email"
          handleInputChange={this.handleInputChange}
        ></Input>
        {/* valiation of form input belongs to here */}
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
// "https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShaggyMullet&accessoriesType=Prescription02&hairColor=Brown&facialHairType=Blank&clotheType=GraphicShirt&clotheColor=White&graphicType=Resist&eyeType=Wink&eyebrowType=Default&mouthType=Smile&skinColor=Light";
