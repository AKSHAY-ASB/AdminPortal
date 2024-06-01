import { axiosLiveInstance } from "./axiosConfig";

export const callAPI = async (url, method, data) => {
  return await axiosLiveInstance.request({
    url,
    method,
    data,
  });
};
