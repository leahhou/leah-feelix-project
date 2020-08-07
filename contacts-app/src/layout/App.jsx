import React from "react";
import Header from "./../components/Header/Header";
import FilterableContacts from "./../components/FilterableContacts/FilterableContacts";
import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.page}>
      <Header></Header>
      <FilterableContacts></FilterableContacts>
    </div>
  );
}

export default App;
