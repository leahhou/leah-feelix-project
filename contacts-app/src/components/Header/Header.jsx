import React from "react";
import styles from "./Header.module.css";
import Button from "./../Button/Button";
import PropTypes from "prop-types";

class Header extends React.Component {
  render() {
    return (
      <div className={styles.base}>
        <h1>{this.props.header}</h1>
        <Button
          buttonType={this.props.type}
          text={this.props.text}
          handleClick={this.props.showContent}
        ></Button>
      </div>
    );
  }
}

Header.propTypes = {
  type: PropTypes.string,
  text: PropTypes.string,
  header: PropTypes.string,
  showContent: PropTypes.func
};

export default Header;
