import React, { Component } from "react";
import api from "../../services/api";
import { login } from "../../services/auth";

//Style
import "./LoginPage.css";

export class LoginPage extends Component {
  state = {
    email: "",
    password: "",
    error: ""
  };

  handleSignIn = async e => {
    e.preventDefault();
    const { email, password } = this.state;
    if (!email || !password) {
      this.setState({ error: "Preencha e-mail e senha para continuar!" });
    } else {
      try {
        const response = await api.post("/auth/authenticate", { email, password });
        login(response.data.token);
        this.props.history.push("/");
      } catch (err) {
        this.setState({
          error:
            "Houve um problema com o login, verifique suas credenciais. T.T"
        });
      }
    }
  };

  render() {
    return (
      <div className="login-page-container col-md-6 mb-4">
        <div className="card">
          <div className="card-body">
            <form onSubmit={this.handleSignIn}>
              <h2 className="text-center font-up font-bold deep-orange-text py-4">
                Login
              </h2>
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
                <button className="btn btn-deep-orange">Entrar</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginPage;
