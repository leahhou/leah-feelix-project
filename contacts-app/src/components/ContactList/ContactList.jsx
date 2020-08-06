// Qs: why I need to disable eslint, otherwise I can't pass the props down ???
// Qs: why foreach doesn't work in JSX? Reference: https://stackoverflow.com/questions/47442462/reactjs-map-works-but-foreach-doesnt
// Qs: why map supposed to work, and also doesn't work
import React from "react";
import Contact from "./Contact";
import PropTypes from "prop-types";

class ContactList extends React.Component {
  render() {
    const contacts = this.props.contacts;
    console.log(contacts);
    return (
      <ul>
        {contacts.map(contact => (
          <li key={contact.id}>
            <Contact contact={contact} />
          </li>
        ))}
      </ul>
    );
  }
}

ContactList.propTypes = {
  contacts: PropTypes.array
};

export default ContactList;
