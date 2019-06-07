// @flow
import { Component } from 'react';
// Composers
import { connect } from 'react-redux';
// Selectors
import { loggedInSelector } from '../selectors';
// Actions
import { validate } from '../actions';
// Types
import type { Connector } from 'react-redux';
import type { Dispatch } from '../../types';

type Props = {
  validate: () => void,
  loggedIn: boolean,
};

class UserValidate extends Component {
  props: Props;

  constructor(props: Props) {
    super(props);
  }

  render() {
    return null;
  }
}

const mapStateToProps = (state, ownProps: {}) => {
  return {
    loggedIn: loggedInSelector(state),
  };
};

const mapDispatchToProps = (dispatch: Dispatch, ownProps: {}) => {
  return {
    
  };
};

const connector: Connector<{}, Props> = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default connector(UserValidate);
