import axiosInstance from "../api/axiosInstance";

export const makeApiRequest = async (
  url,
  tokenName,
  method = "GET",
  data = null
) => {
  const response = await axiosInstance({
    method,
    url,
    data,
    tokenName, // Pass tokenName in the request config
  });
  return response.data;
};
