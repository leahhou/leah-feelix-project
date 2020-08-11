import React from "react";
import styles from "./SearchBar.module.css";

class SearchBar extends React.Component {
  render() {
    return (
      <div className={`${styles.card} ${styles["card--search"]}`}>
        <label className={styles.input__label} htmlFor="search">
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
