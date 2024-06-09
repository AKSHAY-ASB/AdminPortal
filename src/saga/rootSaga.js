import { all, fork } from "redux-saga/effects";
import { watchFetchProductFeatureCMSData } from "../store/saga/productFeaturesSaga";

const rootSaga = function* () {
  yield all([fork(watchFetchProductFeatureCMSData)]);
};

export default rootSaga;
