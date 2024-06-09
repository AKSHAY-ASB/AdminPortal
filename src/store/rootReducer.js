import loginFormSlice from "./slices/loginFormSlice";
import productFeaturesSlice from "./slices/productFeaturesSlice";

export const reducer = {
  productFeature: productFeaturesSlice,
  login: loginFormSlice,
};
