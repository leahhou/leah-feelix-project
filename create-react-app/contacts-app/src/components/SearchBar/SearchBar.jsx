import React from "react";

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
      <div className="card card--search input">
        <label for="search">Search</label>
        <input
          className="input"
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
