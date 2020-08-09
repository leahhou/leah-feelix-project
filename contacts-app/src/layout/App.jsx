import React from "react";
import Header from "./../components/Header/Header";
import FilterableContacts from "./../components/FilterableContacts/FilterableContacts";
import NewContact from "./../components/NewContact/NewContact";
import styles from "./App.module.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newContact: {}
    };
  }

  addNewContact = contactInput => {
    this.setState({
      newContact: { ...contactInput }
    });
  };

  render() {
    return (
      <div className={styles.page}>
        <Header type="primary" text="Add" header="My Contacts"></Header>
        <FilterableContacts></FilterableContacts>
        <NewContact addContact={this.addNewContact}></NewContact>
        {/* Q: why I needs to click twice to update this.state.newContact in App */}
        {this.state.newContact.firstName}
      </div>
    );
  }
}

// App.propTypes = {
//   newContact: PropTypes.Contact
// };

export default App;
