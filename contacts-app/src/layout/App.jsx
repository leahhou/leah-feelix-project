import React from "react";
import FilterableContacts from "./../components/FilterableContacts/FilterableContacts";
import NewContact from "./../components/NewContact/NewContact";
import styles from "./App.module.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contactList: data
    };
  }

  addNewContact = newContact => {
    this.setState({
      contactList: [...this.state.contactList, newContact]
    });
  };

  render() {
    return (
      <div className={styles.page}>
        <FilterableContacts
          contactList={this.state.contactList}
        ></FilterableContacts>
        {console.log(this.state.contactList)}
        <NewContact
          addNewContact={this.addNewContact}
          contactId={this.state.contactList.length + 1}
        ></NewContact>
      </div>
    );
  }
}

export default App;

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
