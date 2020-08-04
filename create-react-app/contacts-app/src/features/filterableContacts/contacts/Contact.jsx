import React from "react";

const Contact = ({ contact }) => {
  const { image, firstName, lastName, companyName, phone, email } = contact;
  return <div>{firstName}</div>;
};

export default Contact;

// Q: why I can't get props from ContactList if I make Contact class component
// class Contact extends React.Component {
//   constructor(props) {
//     super(props);
//   }
//   render() {
//     // const contact = this.props.person;
//     // const { image, firstName, lastName, companyName, phone, email } = contact;
//     return (
//       <div>
//         {console.log(this.props.contact)}
//         <div>Avatar</div>
//         <div>first name</div>
//         <div>last name</div>
//         <div>company name</div>
//         <a>phone number</a>
//         <a>email</a>
//       </div>
//     );
//   }
// }
