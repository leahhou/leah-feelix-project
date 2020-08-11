import React from "react";
import Header from "./../Header/Header";
import SearchBar from "./../SearchBar/SearchBar";
import ContactList from "./../ContactList/ContactList";

class FilterableContacts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: ""
    };
  }

  handleFilterChange = filterInput => {
    this.setState({
      filterText: filterInput
    });
  };

  filterContacts = list => {
    const filtered = [];
    list.forEach(contact => {
      const filterContact = contact.firstName.toLowerCase();
      if (filterContact.indexOf(this.state.filterText) === -1) {
        return;
      }
      filtered.push(contact);
    });
    return filtered;
  };

  render() {
    const filteredList = this.filterContacts(this.props.contactList);
    return (
      <div>
        <Header type="primary" text="Add" header="My Contacts"></Header>
        <SearchBar
          filterText={this.state.filterText}
          onFilterChange={this.handleFilterChange}
        ></SearchBar>
        <ContactList contacts={filteredList}></ContactList>
      </div>
    );
  }
}

export default FilterableContacts;
