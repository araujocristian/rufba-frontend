// @flow
import React, { Component } from "react";
// Components
import { Link } from "react-router-dom";
// Style
import "./HamburgerMenu.css";
// Other

class HamburgerMenu extends Component {
  render() {
    return (
      <div className="hamburger-menu-main">
        <Link to="/">HOME</Link>
        <Link to="/usuario">DEPARTAMENTOS</Link>
      </div>
    );
  }
}

export default HamburgerMenu;
