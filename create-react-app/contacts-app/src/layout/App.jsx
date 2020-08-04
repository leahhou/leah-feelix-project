import React from "react";
import Header from "../features/header/Header";
import FilterableContacts from "./../features/filterableContacts/FilterableContacts";
import "./App.css";

function App() {
  return (
    <div className="page">
      <Header></Header>
      <FilterableContacts></FilterableContacts>
    </div>
  );
}

export default App;
