import axios from "axios"

export const axiosLiveInstance = axios.create({
  baseURL: import.meta.env.VITE_REACT_APP_BASE_URL,
  // adding a custom language header
});