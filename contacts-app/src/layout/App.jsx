import React from "react";
import Header from "../features/header/Header";
import FilterableContacts from "./../features/filterableContacts/FilterableContacts";
import "./App.css";
import ContactList from "../features/filterableContacts/contacts/ContactList";

function App() {
  return (
    <div className="page">
      <Header></Header>
      <Search></Search>
      <ContactList></ContactList>
      <FilterableContacts></FilterableContacts>
    </div>
  );
}

export default App;
