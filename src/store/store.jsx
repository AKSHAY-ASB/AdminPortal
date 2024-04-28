import createSagaMiddleware from "redux-saga";
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import loginFormSlice from "../slice/loginFormSlice";
import rolesReducer from "../slice/rolesSlice";

const sagaMiddleware = createSagaMiddleware();

const reducer = combineReducers({
  login: loginFormSlice,
  roles: rolesReducer,
});

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware({ thunk: false }),
    sagaMiddleware,
  ],
});
// sagaMiddleware.run(rootSaga);
window.store = store;
export default store;
