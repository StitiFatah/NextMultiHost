import { useEffect, useState } from "react";
import { axiosInstance } from "../api_login";
import { get_csrf } from "../common/get_csrf";
import { useStoreCsrfToken } from "../common/zustand_stores";

export default function TestPost() {
  const zcsrftoken = useStoreCsrfToken((state) => state.zcsrftoken);
  const zSetCsrfToken = useStoreCsrfToken((state) => state.zSetCsrfToken);

  useEffect(() => {
    !zcsrftoken && get_csrf(zSetCsrfToken);
  }, []);

  const test_post = () => {
    axiosInstance
      .post(
        "/test_post/",
        { name: "ok" },
        {
          headers: {
            "X-CSRFToken": zcsrftoken,
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => console.log(response.data));
  };

  return (
    <>
      <div>test</div>

      <button onClick={test_post}> test post </button>
    </>
  );
}
