// src/state-management/rootReducer.js

import { combineReducers } from "redux";

import authReducer from "./authurization/authReducer";

const rootReducer = combineReducers({
  auth: authReducer,
});

export default rootReducer;
