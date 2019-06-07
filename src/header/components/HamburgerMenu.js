// @flow
import React, { Component } from "react";
// Components
import { Link } from "react-router-dom";
// Composers
import { userLoggedInConnector } from "../../users";
// Style
import "./HamburgerMenu.css";
// Other

class HamburgerMenu extends Component {
  render() {
    return (
      <div className="hamburger-menu-main">
        <Link to="/">HOME</Link>
        <Link to="/perfil">PERFIL</Link>
        {!this.props.loggedIn ? (
          <>
            <Link to="/cadastro">CADASTRO</Link>
            <Link to="/login">LOGIN</Link>
          </>
        ) : (
          <Link className="hamburger-menu-login" to="/logout">
            SAIR
          </Link>
        )}
      </div>
    );
  }
}

export default userLoggedInConnector(HamburgerMenu);
