import React from "react";
import Contact from "./../Contact/Contact";
import styles from "./ContactList.module.css";
import PropTypes from "prop-types";

class ContactList extends React.Component {
  render() {
    const contacts = this.props.contacts;
    return (
      <ul className={styles.list}>
        {contacts.map(contact => (
          <li key={contact.id} className={styles.list__item}>
            <Contact contact={contact} />
          </li>
        ))}
      </ul>
    );
  }
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      firstName: PropTypes.string.isRequired,
      lastName: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      phone: PropTypes.string,
      company: PropTypes.string
    })
  )
};

export default ContactList;
