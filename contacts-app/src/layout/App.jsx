import React from "react";
import Header from "./../components/Header/Header";
import FilterableContacts from "./../components/FilterableContacts/FilterableContacts";
import NewContact from "./../components/NewContact/NewContact";
import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.page}>
      <Header type="primary" text="Add" header="My Contacts"></Header>
      <FilterableContacts></FilterableContacts>
      <NewContact></NewContact>
    </div>
  );
}

// App.propTypes = {
//   newContact: PropTypes.Contact
// };

export default App;
