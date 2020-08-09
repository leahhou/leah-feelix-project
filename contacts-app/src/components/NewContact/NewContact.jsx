import React from "react";
import Header from "./../Header/Header";
import Form from "./../Form/Form";

class NewContact extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   newContact: {}
    // };
  }

  handleAddContact = (event, contactInput) => {
    event.preventDefault(); //this is to prevent refresh the page
    const newContact = { ...contactInput };
    this.props.addContact(newContact);
  };
  render() {
    return (
      <>
        <Header type="inactive" text="Cancel" header="New Contact"></Header>
        <Form onContactChange={this.handleAddContact}></Form>
      </>
    );
  }
}

export default NewContact;
