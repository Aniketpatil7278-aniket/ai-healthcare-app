// //src\redux\Sagas\authSaga.js
// import { takeLatest, put } from "redux-saga/effects";

// import {
//   LOGIN_REQUEST,
//   LOGIN_SUCCESS,
//   LOGIN_FAILURE,
// } from "../constants/AuthConstants.js";

// import users from "../../data/users";

// function* loginUser(action) {
//   try {
//     const user = users.find(
//       (u) =>
//         u.email === action.payload.email &&
//         u.password === action.payload.password,
//     );

//     if (user) {
//       // localStorage.setItem("user", JSON.stringify(user));
//       sessionStorage.setItem("user", JSON.stringify(user));

//       yield put({
//         type: LOGIN_SUCCESS,
//         payload: user,
//       });
//     } else {
//       yield put({
//         type: LOGIN_FAILURE,
//         payload: "Invalid Email or Password",
//       });
//     }
//   } catch (error) {
//     yield put({
//       type: LOGIN_FAILURE,
//       payload: error.message,
//     });
//   }
// }

// export default function* authSaga() {
//   yield takeLatest(LOGIN_REQUEST, loginUser);
// }
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