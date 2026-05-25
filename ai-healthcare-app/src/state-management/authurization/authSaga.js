// src/state-management/authurization/authSaga.js

import { takeLatest, put, call } from "redux-saga/effects";

import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } from "./authActions";

import { loginUserApi } from "../../services/authApi";

// LOGIN SAGA
function* loginUser(action) {
  try {
    // API CALL
    const user = yield call(loginUserApi, action.payload);

    // SAVE SESSION
    sessionStorage.setItem("user", JSON.stringify(user));

    // SUCCESS
    yield put({
      type: LOGIN_SUCCESS,
      payload: user,
    });
  } catch (error) {
    // FAILURE
    yield put({
      type: LOGIN_FAILURE,
      payload: error.message || "Login Failed",
    });
  }
}

// WATCHER SAGA
export default function* authSaga() {
  yield takeLatest(LOGIN_REQUEST, loginUser);
}
