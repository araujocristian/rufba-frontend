// @flow
import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import { loggedInSelector } from '../selectors';

import type { ContextRouter } from 'react-router-dom';

type Props = {
  ref: string,
  children: React.Element<*> | React.Element <*>[],
    loggedIn: boolean,
} & ContextRouter;

const UnauthenticatedRedirect = (props: Props) =>
  props.loggedIn
    ? <div>{props.children}</div>
    : <Redirect to={{ pathname: '/login', state: { to: props.location.pathname, message: 'Por favor entre ou crie sua conta para continuar' } }} />;

const mapStateToProps = (state, ownProps) => {
  return {
    loggedIn: loggedInSelector(state),
  };
};

export default withRouter(connect(mapStateToProps)(UnauthenticatedRedirect))
