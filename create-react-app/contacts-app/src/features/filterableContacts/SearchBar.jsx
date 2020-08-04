import React from "react";

class SearchBar extends React.Component {
  render() {
    return (
      <div>
        <label for="search">Search</label>
        <input type="text" id="search"></input>
      </div>
    );
  }
}

export default SearchBar;
