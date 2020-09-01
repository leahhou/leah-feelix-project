import React from "react";
import Header from "./../Header/Header";
import ContactForm from "./../ContactForm/ContactForm";
import PropTypes from "prop-types";

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
NewContact.propTypes = {
  addNewContact: PropTypes.func,
  contactId: PropTypes.number,
  showContent: PropTypes.func
};
export default NewContact;
