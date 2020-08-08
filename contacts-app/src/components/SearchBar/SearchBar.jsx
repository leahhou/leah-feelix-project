import React from "react";
import styles from "./SearchBar.module.css";

class SearchBar extends React.Component {
  // handleChange = event => {
  //   this.props.onFilterChange(event.target.value);
  // }; // just find to add event handler directly makes it easier to remember for now

  render() {
    return (
      <div className={`${styles.card} ${styles["card--search"]}`}>
        <label className={styles.input__label} for="search">
          Search
        </label>
        <input
          className={styles.input}
          type="text"
          id="search"
          value={this.props.filterText}
          onChange={event => {
            this.props.onFilterChange(event.target.value);
          }}
        ></input>
      </div>
    );
  }
}

export default SearchBar;
