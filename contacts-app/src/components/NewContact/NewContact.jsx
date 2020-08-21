import React from "react";
import Header from "./../Header/Header";
import ContactForm from "./../ContactForm/ContactForm";

class NewContact extends React.Component {
  render() {
    return (
      <>
        <Header
          type="inactive"
          text="Cancel"
          header="New Contact"
          showContent={this.props.showContent}
        ></Header>
        <ContactForm
          addNewContact={this.props.addNewContact}
          contactId={this.props.contactId}
        ></ContactForm>
      </>
    );
  }
}

export default NewContact;
