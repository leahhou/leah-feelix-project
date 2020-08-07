import React from "react";
import styles from "./SearchBar.module.css";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };

    // This syntax ensures `this` is bound within handleClick.
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = event => {
    this.setState({ value: event.target.value });
  };

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
          value={this.state.value}
          onChange={this.handleChange}
        ></input>
      </div>
    );
  }
}

export default SearchBar;
