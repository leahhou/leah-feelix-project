import React from "react";
import SearchBar from "./../SearchBar/SearchBar";
import ContactList from "./../ContactList/ContactList";

class FilterableContacts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: "",
      contactList: data
    };
  }

  handleFilterChange = filterInput => {
    this.setState({
      filterText: filterInput
    });
  };

  // filterContacts = data => {
  //   const filtered = [];
  //   data.forEach(contact => {
  //     const test = contact.firstName.toLowerCase();
  //     if (test.indexOf(this.state.filterText) === -1) {
  //       return;
  //     }
  //     filtered.push(contact);
  //     return filtered;
  //   });
  // };

  componentDidUpdate() {
    if (this.props.newContact.firstName) {
      //Q: how to set condition here to break infinite loop?
      var updates = this.state.contactList;
      if (this.state.contactList !== updates) {
        this.setState({
          contactList: [...this.state.contactList, this.props.newContact]
        });
        {
          console.log("🥶", this.state.contactList);
        }
      }
    }
    // this.setState({
    //   contactList: [...this.state.contactList, this.props.newContact]
    // });
  }

  render() {
    const filtered = [];
    const contactList = this.state.contactList;
    contactList.forEach(contact => {
      const formattedContact = contact.firstName.toLowerCase();
      if (formattedContact.indexOf(this.state.filterText) === -1) {
        return;
      }
      filtered.push(contact);
    });
    //Qs: why I cannot just call filteredContacts function in render()?
    // filtered = filterContacts(data);
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

const data = [
  {
    id: 1,
    image:
      "https://avataaars.io/?avatarStyle=Transparent&topType=LongHairStraight2&accessoriesType=Blank&hairColor=Black&facialHairType=Blank&clotheType=GraphicShirt&clotheColor=PastelGreen&graphicType=Diamond&eyeType=Happy&eyebrowType=RaisedExcitedNatural&mouthType=Twinkle&skinColor=Pale",
    firstName: "Chaya",
    lastName: "Philip",
    companyName: "Trescothik and Co",
    phone: "4112 232 089",
    email: "markzandrapatterson@gmail.com"
  },
  {
    id: 2,
    image:
      "https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairFrizzle&accessoriesType=Prescription01&hairColor=Black&facialHairType=BeardLight&facialHairColor=BrownDark&clotheType=Overall&clotheColor=PastelRed&eyeType=Surprised&eyebrowType=Default&mouthType=Concerned&skinColor=Tanned",
    firstName: "Gregory",
    lastName: "Hill",
    companyName: "Torrance Brothers",
    phone: "4112 232 089",
    email: "mark_patterson_newyork@gmail.com"
  },
  {
    id: 3,
    image:
      "https://avataaars.io/?avatarStyle=Transparent&topType=LongHairCurvy&accessoriesType=Round&hairColor=Blonde&facialHairType=Blank&clotheType=CollarSweater&clotheColor=Pink&eyeType=Close&eyebrowType=RaisedExcited&mouthType=Eating&skinColor=Light",
    firstName: "Jamie",
    lastName: "Mcnally",
    companyName: "Chloe Associates",
    phone: "4112 232 089",
    email: "zandra.the.chandra@gmail.com"
  }
];
