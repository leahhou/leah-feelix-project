import React from "react";
import SearchBar from "./../SearchBar/SearchBar";
import ContactList from "./../ContactList/ContactList";

class FilterableContacts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: "",
      contactList: {}
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
    const filtered = this.filterContacts(this.props.contactList);
    return (
      <div>
        <SearchBar
          filterText={this.state.filterText}
          onFilterChange={this.handleFilterChange}
        ></SearchBar>
        {this.state.contactList[3] && this.state.contactList[3].firstName}
        <ContactList contacts={filtered}></ContactList>
      </div>
    );
  }
}

export default FilterableContacts;
