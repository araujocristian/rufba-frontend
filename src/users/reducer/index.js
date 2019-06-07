// @flow
import { handleActions, combineActions } from 'redux-actions';
import { combineReducers } from 'redux';
//import _ from 'lodash';
import {
  loginUserRequest,
  loginUser,
  registerUserRequest,
  registerUser,
  logoutUser,

  validateUserRequest,
  validateUser,
  /*updateUserInformationRequest,
  updateUserInformation,
  
 postUserForgotPasswordRequest,
  postUserForgotPassword,
  putUserResetPasswordRequest,
  putUserResetPassword,
  updateUserPasswordRequest,
  updateUserPassword,*/
} from '../actions';

// Types
import type { Reducer } from 'redux';

// User Logged In
const loggedIn: Reducer<string, Action> = handleActions(
  {
    [loginUser]: {
      next: (state, action) => true,
      throw: (state, action) => false,
    },
    [validateUser]: {
      next: (state, action) => true,
      throw: (state, action) => false,
    },
    [logoutUser]: (state, action) => false,
  },
  false,
);

// Information
const initialUserInformation = {
  name: '',
  registration: '',
  email: '',
};
const information = handleActions(
  {
    [combineActions(loginUser, validateUser)]: {
      next: (state, action) =>
        action.payload.entities.user[action.payload.result],
      throw: (state, action) => initialUserInformation,
    },
    [logoutUser]: (state, action) => initialUserInformation,
  },
  initialUserInformation,
);

// Loading
const initialLoadingState = {
  loggingIn: false,
  registering: false,
  validating: false,
  gettingAddresses: false,
  addingAddress: false,
  editingAddress: false,
  deletingAddress: [], // IDs of the addresses that are being deleted
  editingInformation: false,
  gettingCreditCards: false,
  forgotPassword: false,
  resetPassword: false,
  deletingCreditCard: false,
  updatingPassword: false,
};
const loading = handleActions(
  {
    [loginUserRequest]: (state, action) => ({ ...state, loggingIn: true }),
    [loginUser]: (state, action) => ({ ...state, loggingIn: false }),
    [registerUserRequest]: (state, action) => ({ ...state, registering: true }),
    [registerUser]: (state, action) => ({ ...state, registering: false }),
    [validateUserRequest]: (state, action) => ({ ...state, validating: true }),
    [validateUser]: (state, action) => ({ ...state, validating: false }),
  },
  initialLoadingState,
);

// Error
const initialErrorState = {
  wrongLoginUsername: false,
  wrongLoginPassword: false,
  registration: {},
  forgotPassword: {},
  resetPassword: {},
  wrongUpdatePassword: false,
};
const errors = handleActions(
  {
    [loginUser]: {
      next: (state, action) => ({
        ...state,
        wrongLoginUsername: false,
        wrongLoginPassword: false,
      }),
      throw: (state, action) => ({
        ...state,
        wrongLoginUsername: true,
        wrongLoginPassword: true,
      }),
    },
    [registerUser]: {
      next: (state, action) => ({
        ...state,
        registration: initialErrorState.registration,
      }),
      throw: (state, action) => ({
        ...state,
        registration: JSON.parse(action.payload.message),
      }),
    },
  },
  initialErrorState,
);

const reducers = combineReducers({
  loggedIn,
  information,
  
  errors,
  loading,
});

export default reducers;
