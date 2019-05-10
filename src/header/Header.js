// @flow
import React, { Component } from "react";
// Components
import HamburgerMenu from "./HamburgerMenu";
// Styles
import "./Header.css";

type Props = {};

type State = {
  showHamburgerMenu: boolean
};

class Header extends Component {
  state: State;
  constructor(props: Props) {
    super(props);

    this.state = {
      showHamburgerMenu: false
    };
  }

  // This is needed so that the hamburguer menu closes after actions on it
  UNSAFE_componentWillReceiveProps(nextProps: Props) {
    this.setState({ showHamburgerMenu: false });
  }

  render() {
    return (
      <div>
        <div className="header-main">
          <span
            className="header-icon"
            onClick={() =>
              this.setState({
                showHamburgerMenu: !this.state.showHamburgerMenu
              })
            }
          >
            &#x2630;
          </span>
          <span className="header-name">RUFBA</span>
        </div>
        {this.state.showHamburgerMenu ? (
          <div className="hamburger-menu">
            <div
              className="hamburger-menu-outer"
              onClick={() =>
                this.setState({
                  showHamburgerMenu: false
                })
              }
            />
            <HamburgerMenu />
          </div>
        ) : null}
      </div>
    );
  }
}

export default Header;
