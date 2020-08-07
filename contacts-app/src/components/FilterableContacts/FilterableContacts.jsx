import React from "react";
import SearchBar from "./../SearchBar/SearchBar";
import ContactList from "./../ContactList/ContactList";

class FilterableContacts extends React.Component {
  render() {
    return (
      <div>
        <SearchBar></SearchBar>
        <ContactList contacts={data}></ContactList>
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
