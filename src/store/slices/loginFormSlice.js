import { createSlice } from "@reduxjs/toolkit";
import { LOGIN } from "../actions/actions";

const initialState = {
  user: {
    defaultValue: "3",
    defaultValueMpin: "5",
    // modalMessage: "",
    // modalTitle: "",
  },
  loading: false,
  error: null,
};

const loginFormSlice = createSlice({
  name: LOGIN,
  initialState,
  reducers: {
    loginPendingStateData(state) {
      state.loading = true;
      state.error = null;
    },
    loginSuccessStateData(state, action) {
      state.loading = false;
      state.user = action.payload;
    },
    loginFailureStateData(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    handleSetDefaultValue(state, action) {
      state.user.defaultValue = action.payload.defaultValue;
    },
    handleDefaultValueMpin(state, action) {
      state.user.defaultValueMpin = action.payload.defaultValueMpin;
    },
    handleModalMessage(state, action) {
      state.user.modalMessage = action.payload.modalMessage;
    },
    handleModalTitle(state, action) {
      state.user.modalTitle = action.payload.modalTitle;
    },
  },
});

export const {
  loginPendingStateData,
  loginSuccessStateData,
  loginFailureStateData,
  handleSetDefaultValue,
  handleDefaultValueMpin,
  handleModalMessage,
  handleModalTitle,
} = loginFormSlice.actions;

export default loginFormSlice.reducer;
