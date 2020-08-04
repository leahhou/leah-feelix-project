import React from "react";
import SearchBar from "./SearchBar";
import ContactList from "./contacts/ContactList";

class FilterableContacts extends React.Component {
  render() {
    return (
      <div>
        <SearchBar></SearchBar>
        <ContactList></ContactList>
      </div>
    );
  }
}

export default FilterableContacts;
