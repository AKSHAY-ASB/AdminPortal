import { call, put, takeLatest } from "redux-saga/effects";
import {
  fetchRolesRequest,
  fetchRolesSuccess,
  fetchRolesFailure,
} from "./rolesSlice";
import { roles } from "../utils";

function* fetchRolesSaga() {
  try {
    const data = yield call(roles);
    yield put(fetchRolesSuccess(data));
  } catch (error) {
    yield put(fetchRolesFailure(error.message));
  }
}

export function* watchFetchRoles() {
  yield takeLatest(fetchRolesRequest.type, fetchRolesSaga);
}
