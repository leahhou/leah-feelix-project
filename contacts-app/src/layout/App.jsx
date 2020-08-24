import React from "react";
import FilterableContacts from "./../components/FilterableContacts/FilterableContacts";
import NewContact from "./../components/NewContact/NewContact";
import styles from "./App.module.css";
import avatar1 from "./../avatar-1.png";
import avatar2 from "./../avatar-2.png";
import avatar3 from "./../avatar-3.png";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contactList: data,
      invisible: false
    };
  }

  addNewContact = newContact => {
    this.setState({
      contactList: [...this.state.contactList, newContact],
      invisible: false
    });
  };

  showContent = event => {
    const hideContactList = event.target.name === "Add";
    this.setState({
      invisible: hideContactList
    });
  };

  render() {
    return (
      <div className={styles.page}>
        {!this.state.invisible && (
          <FilterableContacts
            contactList={this.state.contactList}
            showContent={this.showContent}
          ></FilterableContacts>
        )}
        {this.state.invisible && (
          <NewContact
            addNewContact={this.addNewContact}
            contactId={this.state.contactList.length + 1}
            showContent={this.showContent}
          ></NewContact>
        )}
      </div>
    );
  }
}

export default App;

const data = [
  {
    id: 1,
    image: avatar1,
    firstName: "Chaya",
    lastName: "Philip",
    companyName: "Trescothik and Co",
    phone: "4112 232 089",
    email: "markzandrapatterson@gmail.com"
  },
  {
    id: 2,
    image: avatar2,
    firstName: "Gregory",
    lastName: "Hill",
    companyName: "Torrance Brothers",
    phone: "4112 232 089",
    email: "mark_patterson_newyork@gmail.com"
  },
  {
    id: 3,
    image: avatar3,
    firstName: "Jamie",
    lastName: "Mcnally",
    companyName: "Chloe Associates",
    phone: "4112 232 089",
    email: "zandra.the.chandra@gmail.com"
  }
];
