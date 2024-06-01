import { takeLatest, put } from "redux-saga/effects";
import { LOGIN } from "../actions/constants";
import {
  loginFailureStateData,
  loginPendingStateData,
  loginSuccessStateData,
} from "../slice/loginFormSlice";
import { callAPI } from "../../api/apiCalls";

function* loginStatusAPI(data) {
  const { payload } = data;
  try {
    yield put(loginPendingStateData());

    // API Call
    const response = yield callAPI(`/requestConfigParameters`, "POST", payload);
    console.log(response);
    yield put(loginSuccessStateData(response?.data));
  } catch (error) {
    yield put(loginFailureStateData(error));
  }
}

export function* watchLoginData() {
  yield takeLatest(LOGIN, loginStatusAPI);
}
