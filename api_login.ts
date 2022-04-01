import axios from "axios";

axios.defaults.xsrfCookieName = 'csrftoken'
axios.defaults.xsrfHeaderName = "X-CSRFTOKEN"

export const BASE_API_URL =
  process.env.NODE_ENV === "production"
    ? "https://testdjangowebservice.onrender.com"
    : "http://localhost:7000";

const axiosInstance = axios.create({
  baseURL: BASE_API_URL,
  timeout: 10000,
  withCredentials: true,
  // headers: {
    // accept: "application/json",
  // },
});

export { axiosInstance };
