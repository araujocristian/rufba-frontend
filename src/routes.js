import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { RegistrationPage, LoginPage, ProfilePage } from "./users";
import {Home} from './home'
import { isAuthenticated } from "./services/auth";

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: "/login", state: { from: props.location } }} />
      )
    }
  />
);

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/login" component={LoginPage} />
      <Route path="/cadastro" component={RegistrationPage} />
      <PrivateRoute path="/" component={Home} />
      <PrivateRoute path="/perfil" component={ProfilePage} />
    </Switch>
  </BrowserRouter>
);

export default Routes;