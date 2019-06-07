// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
// Selectors
import { loggedInSelector, nameSelector } from '../selectors';
// Actions

// Types
import type { Dispatch } from '../../types';

type OwnProps = {
  firstName: string,
  loggedIn: boolean,
};

function userLoggedInConnector(WrappedComponent: ReactClass<any>) {
  const mapStateToProps = (state, ownProps) => {
    return {
      loggedIn: loggedInSelector(state),
      firstName: nameSelector(state),
    };
  };

  const mapDispatchToProps = (dispatch: Dispatch, ownProps) => {
    return {};
  };

  return connect(mapStateToProps, mapDispatchToProps)(
    class userLoggedInConnector extends Component {
      props: OwnProps;
      render() {
        return (
          <WrappedComponent
            {...this.props}
            firstName={this.props.firstName}
            loggedIn={this.props.loggedIn}
          />
        );
      }
    },
  );
}

export default userLoggedInConnector;
