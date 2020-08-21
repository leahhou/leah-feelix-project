import React from "react";
import styles from "./Header.module.css";
import Button from "./../Button/Button";

class Header extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className={styles.base}>
        <h1>{this.props.header}</h1>
        <Button
          type={this.props.type}
          text={this.props.text}
          show={this.props.show}
          handleClick={this.props.showContent}
        ></Button>
      </div>
    );
  }
}

export default Header;
