import axios from "axios"

export const axiosLiveInstance = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com"
    // adding a custom language header
  });