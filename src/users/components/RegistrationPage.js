import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
//API
import api from "../../services/api";
//Style
import "./RegistrationPage.css";


export class RegistrationPage extends Component {
  state = {
    name: "",
    registration: "",
    email: "",
    password: "",
    error: ""
  };

  handleSignUp = async e => {
    e.preventDefault();
    const { name, registration, email, password } = this.state;
    if (!name || !registration || !email || !password) {
      this.setState({ error: "Preencha todos os dados para se cadastrar" });
    } else {
      try {
         const response = await api.post("/auth/register", { name, registration, email, password });
        this.props.history.push("/");
        console.log(response);
      } catch (err) {
        console.log(err);
        this.setState({ error: "Ocorreu um erro ao registrar sua conta. T.T" });
      }
    }
  };

  render() {
    return (
      <div className="registration-page-container col-md-6 mb-4">
        <div className="card">
          <div className="card-body">
            <form onSubmit={this.handleSignUp}>
              <h2 className="text-center font-up font-bold deep-orange-text py-4">
                Cadastro
              </h2>
              {this.state.error && <p>{this.state.error}</p>}
              <div className="md-form">
                <i className="fa fa-user prefix grey-text" />
                <input
                  type="text"
                  id="orangeForm-name3"
                  className="form-control"
                  placeholder="Nome"
                  onChange={e => this.setState({ name: e.target.value })}
                />
              </div>
              <div className="md-form">
                <i className="fa fa-address-card prefix grey-text" />
                <input
                  type="text"
                  id="orangeForm-matricula3"
                  className="form-control"
                  placeholder="Matricula"
                  onChange={e => this.setState({ registration: e.target.value })}
                />
              </div>
              <div className="md-form">
                <i className="fa fa-envelope prefix grey-text" />
                <input
                  type="email"
                  id="orangeForm-email3"
                  className="form-control"
                  placeholder="Email"
                  onChange={e => this.setState({ email: e.target.value })}
                />
              </div>
              <div className="md-form">
                <i className="fa fa-lock prefix grey-text" />
                <input
                  type="password"
                  id="orangeForm-pass3"
                  className="form-control"
                  placeholder="Senha"
                  onChange={e => this.setState({ password: e.target.value })}
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
