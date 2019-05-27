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
        <Link to="/cadastro">CADASTRO</Link>{/** TODO: Rotulos login e Registro só podem aparecer para um user não logado quando logado deve aparecer o rotulo perfil */}
        <Link to="/login">LOGIN</Link>
        <Link to="/perfil">PERFIL</Link>
      </div>
    );
  }
}

export default HamburgerMenu;
