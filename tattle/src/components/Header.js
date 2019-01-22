import React, { Component } from "react";
import '../styles_css/Header.css';

class Header extends Component {
  render() {
    return (
      <div className="mainHeader">
      <img src="https://image.flaticon.com/icons/svg/1177/1177966.svg" className="logo"></img>
        <h4>Twitter Clone</h4>
      </div>
    );
  }
}

export default Header;
