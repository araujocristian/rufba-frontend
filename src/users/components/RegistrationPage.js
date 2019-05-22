import React, { Component } from "react";
//Style
import "./RegistrationPage.css";

export class RegistrationPage extends Component {
  render() {
    return (
      <div className="registration-page-container col-md-6 mb-4">
        <div className="card">
          <div className="card-body">
            <form>
              <h2 className="text-center font-up font-bold deep-orange-text py-4">
                Registro
              </h2>
              <div className="md-form">
                <i className="fa fa-user prefix grey-text" />
                <input
                  type="text"
                  id="orangeForm-name3"
                  className="form-control"
                  placeholder="Nome"
                />
              </div>
              <div className="md-form">
                <i className="fa fa-address-card prefix grey-text" />
                <input
                  type="text"
                  id="orangeForm-matricula3"
                  className="form-control"
                  placeholder="Matricula"
                />
              </div>
              <div className="md-form">
                <i className="fa fa-envelope prefix grey-text" />
                <input
                  type="email"
                  id="orangeForm-email3"
                  className="form-control"
                  placeholder="Email"
                />
              </div>
              <div className="md-form">
                <i className="fa fa-lock prefix grey-text" />
                <input
                  type="password"
                  id="orangeForm-pass3"
                  className="form-control"
                  placeholder="Senha"
                />
              </div>
              <div className="text-center">
                <button className="btn btn-deep-orange">
                  Cadastrar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default RegistrationPage;
