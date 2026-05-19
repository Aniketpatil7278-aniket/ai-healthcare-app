import { takeLatest, put } from "redux-saga/effects";

import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
} from "../constants/authConstants";

import users from "../../data/users";

function* loginUser(action) {
  try {
    const user = users.find(
      (u) =>
        u.email === action.payload.email &&
        u.password === action.payload.password,
    );

    if (user) {
      localStorage.setItem("user", JSON.stringify(user));

      yield put({
        type: LOGIN_SUCCESS,
        payload: user,
      });
    } else {
      yield put({
        type: LOGIN_FAILURE,
        payload: "Invalid Email or Password",
      });
    }
  } catch (error) {
    yield put({
      type: LOGIN_FAILURE,
      payload: error.message,
    });
  }
}

export default function* authSaga() {
  yield takeLatest(LOGIN_REQUEST, loginUser);
}
