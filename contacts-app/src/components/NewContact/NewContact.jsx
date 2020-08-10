import React from "react";
import Header from "./../Header/Header";
import Form from "./../Form/Form";

class NewContact extends React.Component {
  render() {
    return (
      <>
        <Header type="inactive" text="Cancel" header="New Contact"></Header>
        <Form addNewContact={this.props.addNewContact}></Form>
      </>
    );
  }
}

export default NewContact;
