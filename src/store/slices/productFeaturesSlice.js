import { createSlice } from "@reduxjs/toolkit";
import { PRODUCT_FEATURE_GET_CMS } from "../actions/actions";

const initialState = {
  productFeatureData: {},
  loading: false,
  error: null,
};

const productFeaturesSlice = createSlice({
  name: PRODUCT_FEATURE_GET_CMS,
  initialState,
  reducers: {
    productFeatureCMSPending(state) {
      state.loading = true;
      state.error = null;
    },
    productFeatureCMSSuccess(state, action) {
      state.loading = false;
      state.productFeatureData = action.payload;
    },
    productFeatureCMSFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  productFeatureCMSPending,
  productFeatureCMSSuccess,
  productFeatureCMSFailure,
} = productFeaturesSlice.actions;

export default productFeaturesSlice.reducer;
