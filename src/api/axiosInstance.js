import axios from "axios";

// Function to retrieve token from cookies based on token name
const getTokenFromCookies = (tokenName) => {
  const cookies = document.cookie.split(";").map((cookie) => cookie.trim());
  const tokenCookie = cookies.find((cookie) =>
    cookie.startsWith(`${tokenName}=`)
  );
  return tokenCookie ? tokenCookie.split("=")[1] : null;
};

// Create a new Axios instance
const instance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Add a request interceptor to set authorization token
instance.interceptors.request.use(
  async (config) => {
    const tokenName = config.tokenName;
    let token = getTokenFromCookies(tokenName);

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default instance;
