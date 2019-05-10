import React, { Component } from "react";
import { withRouter, Route } from "react-router-dom";
import { Header } from "./header";

class App extends Component {
  render() {
    return (
      
      <div className="App">
        <Header />
        <div className="container mt-10">
          <button type="button" className="btn btn-default" aria-label="Left Align">
            <span className="glyphicon glyphicon-align-left" aria-hidden="true" />
          </button>
          <div className="alert alert-primary" role="alert">
            A simple primary alert—check it out!
          </div>
          <div className="alert alert-secondary" role="alert">
            A simple secondary alert—check it out!
          </div>
          <div className="alert alert-success" role="alert">
            A simple success alert—check it out!
          </div>
          <div className="alert alert-danger" role="alert">
            A simple danger alert—check it out!
          </div>
          <div className="alert alert-warning" role="alert">
            A simple warning alert—check it out!
          </div>
          <div className="alert alert-info" role="alert">
            A simple info alert—check it out!
          </div>
          <div className="alert alert-light" role="alert">
            A simple light alert—check it out!
          </div>
          <div className="alert alert-dark" role="alert">
            A simple dark alert—check it out!
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(App);
