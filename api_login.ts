import axios from "axios";

// export const BASE_API_URL = "http://localhost:5000/";
export const BASE_API_URL1 = "http://localhost:5000";
export const BASE_API_URL = "https://testdjangowebservice.onrender.com";

const axiosInstance = axios.create({
  baseURL: BASE_API_URL,
  timeout: 10000,
  withCredentials: true,
  headers: {
    accept: "application/json",
  },
});

export { axiosInstance };
