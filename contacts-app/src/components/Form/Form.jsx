import React from "react";
import Button from "./../Button/Button";
import styles from "./Form.module.css";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newContact: {
        id: this.props.contactId,
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
    //Q1: why the input is out of sync when console.log?
    // console.log("🥳", this.state.newContact);
  };
  render() {
    return (
      <form className={`${styles.card} ${styles["card--form"]}`}>
        <label htmlFor="firstName" className={styles.input__label}>
          First name
        </label>
        <input
          type="text"
          id="firstName"
          className={styles.input}
          onChange={this.handleInputChange}
        ></input>

        <label htmlFor="lastName" className={styles.input__label}>
          Last name
        </label>
        <input
          type="text"
          id="lastName"
          className={styles.input}
          onChange={this.handleInputChange}
        ></input>

        <label htmlFor="companyName" className={styles.input__label}>
          Company
        </label>
        <input
          type="text"
          id="companyName"
          className={styles.input}
          onChange={this.handleInputChange}
        ></input>

        <label htmlFor="phone" className={styles.input__label}>
          Phone number
        </label>
        <input
          type="text"
          id="phone"
          className={styles.input}
          onChange={this.handleInputChange}
        ></input>

        <label htmlFor="email" className={styles.input__label}>
          Email
        </label>
        <input
          type="text"
          id="email"
          className={styles.input}
          onChange={this.handleInputChange}
        ></input>

        {/* valiation of form input belongs to here */}
        <Button
          type="primary"
          text="Save"
          addNewContact={this.props.addNewContact}
          newContact={this.state.newContact}
        ></Button>
      </form>
    );
  }
}

export default Form;

const defaultImage =
  "https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShaggyMullet&accessoriesType=Prescription02&hairColor=Brown&facialHairType=Blank&clotheType=GraphicShirt&clotheColor=White&graphicType=Resist&eyeType=Wink&eyebrowType=Default&mouthType=Smile&skinColor=Light";
