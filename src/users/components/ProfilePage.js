import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
//API
//Style
import "./ProfilePage.css";


export class ProfilePage extends Component {
  state = {
    name: "",
    registration: "",
    email: "",
    password: "",
    error: ""
  };

  render() {

    var nome = 'Harvey Specter'
    const matricula = '201517118'
    var mail = 'harveyspecter@sa.us'
    var colaboration = 49
    var status = 'bronze'
   
    if (colaboration<5) {
        status = 'BRONZE';
    }

    else if (colaboration<20) {
        status = 'PRATA';
    }

    else if (colaboration<50) { 
        status = 'OURO';
    }

    else {
        status = 'DIAMANTE';
    }

 
    return (
      <div className="registration-page-container col-md-6 mb-4">
        <div className="card">
          <div className="card-body">
              <h2 className="text-center font-up font-bold deep-orange-text py-4">
                Perfil
              </h2>
              {this.state.error && <p>{this.state.error}</p>}
              <div className="md-form">
                <i className="fa fa-user prefix grey-text" />
                <input
                  type="text"
                  id="orangeForm-name3"
                  className="form-control"
                  placeholder={nome}
                  onChange={e => this.setState({ name: e.target.value })}
                  disabled = {true}
                />
              </div>
              <div className="md-form">
                <i className="fa fa-trophy prefix grey-text" />
                <input
                  type="text"
                  id="orangeForm-name3"
                  className="form-control" 
                  placeholder={status}
                  onChange={e => this.setState({ name: e.target.value })}
                  disabled = {true}
                />
              </div>
              <div className="md-form">
                <i className="fa fa-address-card prefix grey-text" />
                <input
                  type="text"
                  id="orangeForm-matricula3"
                  className="form-control"
                  placeholder={matricula}
                  onChange={e => this.setState({ registration: e.target.value })}
                  disabled = {true}
                />
              </div>
              <div className="md-form">
                <i className="fa fa-envelope prefix grey-text" />
                <input
                  type="email"
                  id="orangeForm-email3"
                  className="form-control"
                  placeholder={mail}
                  onChange={e => this.setState({ email: e.target.value })}
                  disabled = {true}
                />
              </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProfilePage;
