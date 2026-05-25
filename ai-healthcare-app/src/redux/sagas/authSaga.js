//src/redux/Sagas/authSaga.js
import { takeLatest, put, call } from "redux-saga/effects";

import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
} from "../Constants/AuthConstants";

import { loginUserApi } from "../../api/authApi";

function* loginUser(action) {
  try {
    // API CALL
    const user = yield call(loginUserApi, action.payload);

    // Save Session
    sessionStorage.setItem("user", JSON.stringify(user));

    yield put({
      type: LOGIN_SUCCESS,
      payload: user,
    });
  } catch (error) {
    yield put({
      type: LOGIN_FAILURE,
      payload: error.message || "Login Failed",
    });
  }
}

export default function* authSaga() {
  yield takeLatest(LOGIN_REQUEST, loginUser);
}