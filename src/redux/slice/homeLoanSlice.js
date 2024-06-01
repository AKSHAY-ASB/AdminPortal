import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  homeLoanValue: {
    loanAmount: "",
    minAmount: "",
    rateOfInt: "",
    loanTenure: "",
    loanType: "",
  },
  defaults: {
    defaultLoanAmount: "3000000",
    defaultMinAmount: "50000",
    defaultRateOfInterest: "8.5",
    defaultLoanTenure: "5",
    defaultLoanType: "Fixed",
  },
  isChecked: {
    loanAmount: false,
    minAmount: false,
    rateOfInt: false,
    loanTenure: false,
    loanType: false,
  },
  isModalOpen: false,
};

const homeLoanSlice = createSlice({
  name: "homeLoan",
  initialState,
  reducers: {
    setHomeLoanValue: (state, action) => {
      state.homeLoanValue = {
        ...state.homeLoanValue,
        ...action.payload,
      };
    },
    setIsChecked: (state, action) => {
      state.isChecked = {
        ...state.isChecked,
        ...action.payload,
      };
    },
    setDefaults: (state) => {
      state.defaults = {
        ...state.defaults,
        ...state.homeLoanValue,
      };
    },
    resetHomeLoanValue: (state) => {
      state.homeLoanValue = initialState.homeLoanValue;
      state.isChecked = initialState.isChecked;
    },
    toggleModal: (state) => {
      state.isModalOpen = !state.isModalOpen;
    },
  },
});

export const {
  setHomeLoanValue,
  setIsChecked,
  setDefaults,
  resetHomeLoanValue,
  toggleModal,
} = homeLoanSlice.actions;

export default homeLoanSlice.reducer;
