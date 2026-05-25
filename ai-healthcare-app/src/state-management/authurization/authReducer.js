// src/state-management/authurization/authReducer.js

import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
} from "./authActions";

const initialState = {
  loading: false,

  user: JSON.parse(sessionStorage.getItem("user")) || null,

  isAuthenticated: !!sessionStorage.getItem("user"),

  error: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    // LOGIN REQUEST
    case LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };

    // LOGIN SUCCESS
    case LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        user: action.payload,
        isAuthenticated: true,
        error: null,
      };

    // LOGIN FAILURE
    case LOGIN_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    // LOGOUT
    case LOGOUT:
      sessionStorage.removeItem("user");

      return {
        ...state,
        user: null,
        isAuthenticated: false,
        error: null,
      };

    default:
      return state;
  }
};

export default authReducer;
