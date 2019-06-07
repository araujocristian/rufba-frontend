import React, { Component } from "react";
import _ from 'lodash';
import { validationHelpers } from "../../common";
import { connect } from "react-redux";
import { Redirect, withRouter } from "react-router-dom";
// Components
import { InputFieldErrorMessage } from "../../common";
// Import Actions
import {  register } from "../actions";
// Selectors
import {
  loggedInSelector,
  registeringLoadingSelector,
  registrationErrorsSelector
} from "../selectors";
//Style
import "./RegistrationPage.css";

/*
    Returns the "Password String Text and Color" based on the value of passwordStrength
    Price:
        PasswordStrenth 'Forte': Shows PasswordStrenth in Green
        PasswordStrenth 'Médio': Shows PasswordStrenth in Orange
        PasswordStrenth 'Fraca': Shows PasswordStrenth in Red
        All else: Shows no text
    Also places the correct class for styling
*/
const PasswordStrengthTextAndColor = ({ passwordStrength }) => {
  if (passwordStrength === "strong") {
    return (
      <span className="password-strength-text">
        Força da senha:{" "}
        <span className="password-strength-strong"> Forte </span>{" "}
      </span>
    );
  } else if (passwordStrength === "average") {
    return (
      <span className="password-strength-text">
        Força da senha:{" "}
        <span className="password-strength-medium"> Média </span>{" "}
      </span>
    );
  } else if (passwordStrength === "weak") {
    return (
      <span className="password-strength-text">
        Força da senha: <span className="password-strength-poor"> Fraca </span>{" "}
      </span>
    );
  } else {
    return <span> </span>;
  }
};
class RegistrationPage extends Component {
  constructor(props: Props) {
    super(props);

    this.calculatePasswordStrength.bind(this);

    this.state = {
      name: "",
      registration: "",
      email: "",
      password: "",
      passwordConfirmation: "",

      passwordStrength: "",

      nameError: "",
      registrationError: "",
      emailError: "",
      passwordError: "",
      passwordConfirmationError: ""
    };
  }

  // Sets this.state.passwordStrength based on the characteristics of the password
  calculatePasswordStrength(password: string) {
    if (password === "") this.setState({ passwordStrength: "" });
    else if (password.length < 8) this.setState({ passwordStrength: "weak" });
    else if (/^[a-zA-Z0-9- ]*$/.test(password) === false)
      this.setState({ passwordStrength: "strong" });
    else if (password.length > 15)
      this.setState({ passwordStrength: "strong" });
    else this.setState({ passwordStrength: "average" });
  }

  // Validates the form on submission. If there are no validation error dispatches action.
  validateUserInput() {
    let noValidationErrors: boolean = true;

    const nameError = validationHelpers.user.name(this.state.name);
    this.setState({ nameError });
    if (nameError) {
      noValidationErrors = false;
    }
    const registrationError = validationHelpers.user.registration(
      this.state.registration
    );
    this.setState({ registrationError });
    if (registrationError) {
      noValidationErrors = false;
    }
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

    const passwordConfirmationError = validationHelpers.user.passwordConfirmation(
      this.state.passwordConfirmation,
      this.state.password
    );
    this.setState({ passwordConfirmationError });
    if (passwordConfirmationError) {
      noValidationErrors = false;
    }

    if (noValidationErrors) {
      this.props.submitRegister(
        this.state.name,
        this.state.registration,
        this.state.email,
        this.state.password
      );
    } else {
      console.error("Validation error on registration form.");
    }
  }

  UNSAFE_componentWillReceiveProps(nextProps: Props) {
    if (
      this.props.isLoading &&
      !nextProps.isLoading &&
      !_.isEmpty(nextProps.errors)
    ) {
      if (nextProps.errors.base) {
        this.setState({ emailError: nextProps.errors.base[0] });
      }
    }
  }

  render() {
    if (this.props.loggedIn) {
      const nextRoute =
        this.props.location.state && this.props.location.state.to
          ? this.props.location.state.to
          : "/";
      return <Redirect to={nextRoute} />;
    }
    return (
      <div className="registration-page-container col-md-6 mb-4">
        <div className="card">
          <div className="card-body">
            {console.log(this.props)}
            <form
              onSubmit={e => {
                e.preventDefault();
                this.validateUserInput();
              }}
            >
              <h2 className="text-center font-up font-bold deep-orange-text py-4">
                Cadastro
              </h2>
              <InputFieldErrorMessage message={this.state.nameError} />
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

              <InputFieldErrorMessage message={this.state.registrationError} />
              <div className="md-form">
                <i className="fa fa-address-card prefix grey-text" />
                <input
                  type="text"
                  id="orangeForm-matricula3"
                  className="form-control"
                  placeholder="Matricula"
                  onChange={e =>
                    this.setState({ registration: e.target.value })
                  }
                />
              </div>

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

              {this.state.passwordStrength !== "" ? (
                <PasswordStrengthTextAndColor
                  passwordStrength={this.state.passwordStrength}
                />
              ) : null}
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

              <InputFieldErrorMessage
                message={this.state.passwordConfirmationError}
              />
              <div className="md-form">
                <i className="fa fa-lock prefix grey-text" />
                <input
                  type="password"
                  id="orangeForm-pass3"
                  className="form-control"
                  placeholder="Confirme sua senha"
                  onChange={e =>
                    this.setState({ passwordConfirmation: e.target.value })
                  }
                />
              </div>
              <div className="text-center">
                <button className="btn btn-deep-orange">Cadastrar</button>
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
    isRegistering: registeringLoadingSelector(state),
    errors: registrationErrorsSelector(state)
  };
};

const mapDispatchToProps = (dispatch: Dispatch, stateProps) => {
  return {
    submitRegister: (name, registration, email, password) => {
      dispatch(register(name, registration, email, password));
    }
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(RegistrationPage)
);
