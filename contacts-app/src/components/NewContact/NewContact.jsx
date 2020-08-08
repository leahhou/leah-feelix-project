import React from "react";
import Header from "./../Header/Header";
import Form from "./../Form/Form";

class NewContact extends React.Component {
  render() {
    return (
      <>
        <Header type="inactive" text="Cancel"></Header>
        <Form></Form>
      </>
    );
  }
}

export default NewContact;