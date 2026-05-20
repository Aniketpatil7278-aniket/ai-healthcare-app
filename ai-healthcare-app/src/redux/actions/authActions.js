import { LOGIN_REQUEST, LOGOUT } from "../Constants/AuthConstants";

export const loginRequest = (data) => ({
  type: LOGIN_REQUEST,
  payload: data,
});

export const logoutUser = () => ({
  type: LOGOUT,
});
