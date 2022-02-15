import { axiosInstance } from "../api_login";
import { useStoreCsrfToken } from "./zustand_stores";

const get_csrf = (setcsrf) => {
  axiosInstance
    .get("users/get_csrf/")
    .then((response) => {
      if (response.status === 200) {
        console.log("get_csrf function");
        let csrftoken = response.headers["x-csrftoken"];
        console.log("csrftoken :", csrftoken);
        setcsrf(csrftoken);
        console.log("response headers", response.headers);
      }
    })
    .catch((error) => {
      console.log(error);
      return null;
    });
};

export { get_csrf };
