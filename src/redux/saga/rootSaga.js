import { all, fork } from "redux-saga/effects";
import { watchLoginData } from "./loginFormSaga";

const rootSaga = function* () {
  yield all([fork(watchLoginData)]);
};

export default rootSaga;
