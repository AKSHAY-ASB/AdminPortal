// import { all, fork } from "redux-saga/effects";
// import { watchGetLogin } from "../pages/Login/saga";

// const rootSaga = function* () {
//   yield all([
//     fork(watchGetLogin),
//     // Other forks
//   ]);
// };
// export default rootSaga;

import { all } from "redux-saga/effects";
import { watchFetchRoles } from "./rolesSaga";

export default function* rootSaga() {
  yield all([
    watchFetchRoles(),
    // Add other sagas here if needed
  ]);
}
