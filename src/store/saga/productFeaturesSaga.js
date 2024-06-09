import { call, put, takeLatest } from "redux-saga/effects";
import {
  productFeatureCMSPending,
  productFeatureCMSSuccess,
  productFeatureCMSFailure,
} from "../slices/productFeaturesSlice";
import { makeApiRequest } from "../../utils/apiUtils";
import { PRODUCT_FEATURE_GET_CMS } from "../actions/actions";

function* fetchProductFeaturesAPI() {
  try {
    yield put(productFeatureCMSPending());
    const tokenName = "backendToken";

    const response = yield call(
      makeApiRequest,
      "/oneapp-unc/api/v1/mahfin-product-features?language=en&product_type=Loans",
      tokenName
    );

    console.log("saga file---->", response);

    yield put(productFeatureCMSSuccess(response?.data));
  } catch (error) {
    yield put(productFeatureCMSFailure(error.message));
  }
}

export function* watchFetchProductFeatureCMSData() {
  yield takeLatest(PRODUCT_FEATURE_GET_CMS, fetchProductFeaturesAPI);
}
