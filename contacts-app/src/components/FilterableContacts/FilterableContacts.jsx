import React from "react";
import Header from "./../Header/Header";
import SearchBar from "./../SearchBar/SearchBar";
import ContactList from "./../ContactList/ContactList";
import PropTypes from "prop-types";

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
        <Header
          type="primary"
          text="Add"
          header="My Contacts"
          showContent={this.props.showContent}
        ></Header>
        <SearchBar
          filterText={this.state.filterText}
          onFilterChange={this.handleFilterChange}
        ></SearchBar>
        <ContactList contacts={filteredList}></ContactList>
      </div>
    );
  }
}
FilterableContacts.propTypes = {
  contactList: PropTypes.arrayOf(
    PropTypes.shape({
      firstName: PropTypes.string.isRequired,
      lastName: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      phone: PropTypes.string,
      company: PropTypes.string
    })
  ),
  showContent: PropTypes.func
};
export default FilterableContacts;
