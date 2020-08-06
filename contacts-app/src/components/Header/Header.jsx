import React from "react";
import "./Header.css";

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <h1>My contacts</h1>
        <a className="button button--primary header__button">Add</a>
      </div>
    );
  }
}

export default Header;
