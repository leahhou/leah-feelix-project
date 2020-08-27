import React from "react";
import styles from "./SearchBar.module.css";
import PropTypes from "prop-types";
import shortId from "shortid";
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
          id={shortId.generate()}
          value={this.props.filterText}
          onChange={event => {
            this.props.onFilterChange(event.target.value);
          }}
        ></input>
      </div>
    );
  }
}

SearchBar.propTypes = {
  filterText: PropTypes.string,
  onFilterChange: PropTypes.func
};

export default SearchBar;
