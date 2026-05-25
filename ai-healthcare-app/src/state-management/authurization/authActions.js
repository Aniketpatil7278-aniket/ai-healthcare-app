// src/state-management/authurization/authActions.js

export const LOGIN_REQUEST = "LOGIN_REQUEST";

export const LOGIN_SUCCESS = "LOGIN_SUCCESS";

export const LOGIN_FAILURE = "LOGIN_FAILURE";

export const LOGOUT = "LOGOUT";

// LOGIN REQUEST
export const loginRequest = (data) => ({
  type: LOGIN_REQUEST,
  payload: data,
});

// LOGIN SUCCESS
export const loginSuccess = (data) => ({
  type: LOGIN_SUCCESS,
  payload: data,
});

// LOGIN FAILURE
export const loginFailure = (error) => ({
  type: LOGIN_FAILURE,
  payload: error,
});

// LOGOUT
export const logoutUser = () => ({
  type: LOGOUT,
});
