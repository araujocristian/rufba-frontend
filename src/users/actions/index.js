import { createAction } from 'redux-actions';
// Apis
import User from '../api';
import { updateToken } from '../api/session';
// Logger
import { logException } from '../../logHelper';

// Register
export const registerUserRequest = createAction('REGISTER_USER_REQUEST');
export const registerUser = createAction('REGISTER_USER');

export function register(
    name: String,
    registration: Number,
    email: String,
    password: String
) {
  return async (dispatch: Dispatch) => {
    dispatch(registerUserRequest());
    try {
      const userResponse = await User.register(
        name,
        registration,
        email,
        password,
      );
      dispatch(registerUser(userResponse));
      // Since we succeeded to register the user lets log him in
      // TODO: Is this the best/correct way to do this?
      dispatch(login(email, password));
    } catch (err) {
      logException(err);
      dispatch(registerUser(err));
    }
  };
}

// Login
export const loginUserRequest = createAction('LOGIN_USER_REQUEST');
export const loginUser = createAction('LOGIN_USER');

export function login(email: string, password: string) {
  return async (dispatch: Dispatch) => {
    dispatch(loginUserRequest());
    try {
      const userResponse = await User.login(email, password);
      dispatch(loginUser(userResponse));
    } catch (err) {
      logException(err);
      dispatch(loginUser(err));
    }
  };
}

// Logout user
export const logoutUserRequest = createAction('LOGOUT_USER_REQUEST');
export const logoutUser = createAction('LOGOUT_USER');

export function logout() {
  return async (dispatch: Dispatch) => {
    dispatch(logoutUserRequest());
    try {
      await User.logout();
      dispatch(logoutUser());
      window.location.reload(false);
    } catch (err) {
      // If there's an error logging out, still remove tokens
      dispatch(logoutUser());
    }
  };
}

// Validate token
export const validateUserRequest = createAction('VALIDATE_USER_REQUEST');
export const validateUser = createAction('VALIDATE_USER');

export function validate() {
  return async (dispatch: Dispatch) => {
    dispatch(validateUserRequest());
    try {
      const userResponse = await User.validateToken();
      dispatch(validateUser(userResponse));
    } catch (err) {
      // logException(err);
      dispatch(validateUser(err));
    }
  };
}