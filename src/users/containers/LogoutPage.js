// @flow
import React from 'react';
// Components
import { Redirect } from 'react-router-dom';
// Composers
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
// Import Actions
import { logout } from '../actions';
// Selectors
// Types
import type { ContextRouter } from 'react-router-dom';

type RouterProps = ContextRouter;
type Props = {} & RouterProps;

class LogoutPage extends React.Component {
  constructor(props: Props) {
    super(props);

    props.handleLogout();
  }

  render() {
    return (
      <Redirect
        to={{
          pathname: '/',
          state: { message: 'Sua sessão foi finalizada com sucesso' },
        }}
      />
    );
  }
}

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = (dispatch: Dispatch, stateProps) => {
  return {
    handleLogout: () => {
      dispatch(logout());
    },
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(LogoutPage),
);
