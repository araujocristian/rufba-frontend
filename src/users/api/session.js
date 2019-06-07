// @flow
import { authPost, authGet } from "../../api";
import { normalize } from "normalizr";
import { camelizeKeys } from "humps";
import * as schema from "./schema";

/**
 * REGISTER
 * Registers a new user through the api.
 */
export async function register(
  name: String,
  registration: Number,
  email: String,
  password: String
) {
  const body = {
    name,
    registrationNumber:registration,
    email,
    password,
    isAdmin: false
  };
  const response = await authPost(`/auth/register`, body);
  const data = await response.json().then(b => camelizeKeys(b));
  const normalized = normalize(data, schema.user);
  return normalized;
}

/**
 * LOGIN
 * Logins in a user, returning object with JWT and User info
 */
export async function login(email: string, password: string) {
  const body = { email, password };
  const response = await authPost(`/auth/authenticate`, body);
  if (!response.ok) throw new Error(response.status);

  // Delete the local storage order token
  const data = await response.json().then(b => camelizeKeys(b));
  const token = data.token;
  const normalized = normalize(data.user, schema.user);

  updateToken(token);
  return normalized;
}

/**
 * UPDATE TOKEN
 */
export async function updateToken(token, remember) {
  // We use a try/catch to detect situations where localStorage quota is 0, like safari private browsing mode
  try {
    if (remember) throw new Error("Should not remember");
    localStorage.setItem("access-token", token);
  } catch (err) {
    // Remove items from localStorage just to be sure
    localStorage.removeItem("access-token");
    // Add items to sessionStorage, not persistent
    sessionStorage.setItem("access-token", token);
  }
}

/**
 * LOGOUT
 */
export async function logout() {
  localStorage.removeItem("access-token");
  sessionStorage.removeItem("access-token");
  return;
}

/**
 * Validate token
 */
export async function validateToken() {
  const response = await authGet("/v2/users/me");
  const data = await response.json().then(b => camelizeKeys(b));
  const normalized = normalize(data, schema.user);
  return normalized;
}
