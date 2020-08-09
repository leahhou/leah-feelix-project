import React from "react";
import Header from "./../Header/Header";
import Form from "./../Form/Form";

class NewContact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newContact: {}
    };
  }

  handleAddContact = (event, contactInput) => {
    event.preventDefault();
    this.setState({
      newContact: { ...this.state.newContact, ...contactInput }
    });
  };
  render() {
    return (
      <>
        <Header type="inactive" text="Cancel" header="New Contact"></Header>
        <Form onContactChange={this.handleAddContact}></Form>
        {console.log("🤯", this.state.newContact)}
      </>
    );
  }
}

export default NewContact;
