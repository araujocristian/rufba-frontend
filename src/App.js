import React, { Component } from "react";
import { withRouter, Route } from "react-router-dom";
import { Header } from "./header";
import { RegistrationPage, LoginPage } from "./users";
import {Home} from './home'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="container mt-10">
          <Route path="/" render={() => <Home />} />
          <Route path="/cadastro" render={() => <RegistrationPage />} />
          <Route path="/login" render={() => <LoginPage />} />
        </div>
      </div>
    );
  }
}

export default withRouter(App);
