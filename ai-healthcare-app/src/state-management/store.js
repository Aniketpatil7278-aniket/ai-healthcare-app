// src/state-management/store.js

import { legacy_createStore as createStore, applyMiddleware } from "redux";

import createSagaMiddleware from "redux-saga";

import rootReducer from "./rootReducer";

import rootSaga from "./rootSaga";

// CREATE SAGA MIDDLEWARE
const sagaMiddleware = createSagaMiddleware();

// CREATE STORE
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

// RUN SAGA
sagaMiddleware.run(rootSaga);

export default store;
