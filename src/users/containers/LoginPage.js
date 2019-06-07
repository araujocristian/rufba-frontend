import React, { Component } from "react";
import _ from "lodash";
import { validationHelpers } from "../../common";
import { connect } from "react-redux";
import { Redirect, withRouter } from "react-router-dom";
// Components
import { InputFieldErrorMessage } from "../../common";
// Import Actions
import { login } from "../actions";
// Selectors
import {
  loggedInSelector,
  loggingInLoadingSelector,
  loginErrorsSelector,
} from "../selectors";
//Style

//Style
import "./LoginPage.css";

export class LoginPage extends Component {
  state: State;

  constructor(props: Props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      emailError: "",
      passwordError: ""
    };
  }

  // Validates the form on submission. If there are no validation error dispatches action.
  validateUserInput() {
    let noValidationErrors: boolean = true;

    const emailError = validationHelpers.user.email(this.state.email);
    this.setState({ emailError });
    if (emailError) {
      noValidationErrors = false;
    }

    const passwordError = validationHelpers.user.password(this.state.password);
    this.setState({ passwordError });
    if (passwordError) {
      noValidationErrors = false;
    }

    if (noValidationErrors) {
      this.props.submitLogin(this.state.email, this.state.password);
    } else {
      console.error("Validation error on registration form.");
    }
  }

  UNSAFE_componentWillReceiveProps(nextProps: Props) {
    // If we have a server error show them instead of the local errors
    if (nextProps.errors.emailError) {
      this.setState({ emailError: "Email ou senha incorretos" });
    }

    if (nextProps.errors.passwordError) {
      this.setState({ passwordError: "Email ou senha incorretos" });
    }
  }

  render() {
    if (this.props.loggedIn) {
      const nextRoute =
        this.props.location.state && this.props.location.state.to
          ? this.props.location.state.to
          : '/';
      return <Redirect to={nextRoute} />;
    }
    return (
      <div className="login-page-container col-md-6 mb-4">
        <div className="card">
          <div className="card-body">
            <form
              onSubmit={e => {
                e.preventDefault();
                this.validateUserInput();
              }}
            >
              <h2 className="text-center font-up font-bold deep-orange-text py-4">
                Login
              </h2>

              <InputFieldErrorMessage message={this.state.emailError} />
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

              <InputFieldErrorMessage message={this.state.passwordError} />
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

const mapStateToProps = state => {
  return {
    loggedIn: loggedInSelector(state),
    isLoggingIn: loggingInLoadingSelector(state),
    errors: loginErrorsSelector(state),
  };
};

const mapDispatchToProps = (dispatch: Dispatch, stateProps) => {
  return {
    submitLogin: (email, password) => {
      dispatch(login(email, password));
    }
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(LoginPage)
);
