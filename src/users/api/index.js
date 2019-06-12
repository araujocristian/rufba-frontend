// @flow
// Methods
import { register, login, logout, validateToken } from './session';

const User = {
  register: register,
  login: login,
  logout: logout,
  validateToken: validateToken,
};

export default User;
