import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  useStoreConnected,
  useStoreUsername,
  useStoreCsrfToken,
} from "../common/zustand_stores";
import Router from "next/router";
import Link from "next/link";
import { get_csrf } from "../common/get_csrf";
import { IsConnectedShort } from "../common/is_logged_short";
import { BASE_API_URL } from "../api_login";
import GoogleOAuthLoginButton from "../components/google_oauth_login_button";

const Login = () => {
  const zco = useStoreConnected((state) => state.zco);
  const zcheck = useStoreConnected((state) => state.zcheck);

  const zusername = useStoreUsername((state) => state.zusername);
  const zSetUsername = useStoreUsername((state) => state.zSetUsername);

  const zcsrftoken = useStoreCsrfToken((state) => state.zcsrftoken);
  const zSetCsrfToken = useStoreCsrfToken((state) => state.zSetCsrfToken);

  const initialFormData = Object.freeze({
    email: "",
    password: "",
  });

  type InitialFormType = {
    email: string;
    password: string;
  };

  const [formData, updateFormData] = useState<InitialFormType>(initialFormData);
  const [LoginErrors, setLoginErrors] = useState<{ error: string }>({
    error: "",
  });

  const handleChange = (event) => {
    updateFormData({
      ...formData,
      [event.target.name]: event.target.value.trim(),
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    let login_data = {
      email: formData.email,
      password: formData.password,
    };

    // axios request

    const axiosLogin = axios.create({
      baseURL: BASE_API_URL,
      timeout: 5000,
      withCredentials: true,

      headers: {
        accept: "application/json",
        "X-CSRFToken": zcsrftoken,
      },
    });

    axiosLogin
      .post("/users/login/", login_data)
      .then((response) => {
        if (response.status === 200) {
          console.log(response.data);
          setLoginErrors({ error: "" });
          IsConnectedShort(zco, zcheck, zSetUsername);
          get_csrf(zSetCsrfToken);
          Router.push("/");
        } else {
          console.log(response.status);
          console.log(response.data);
          setLoginErrors({ error: "error" });
        }
      })
      .catch((error) => {
        console.log(error);
        setLoginErrors({ error: error });
      });

    // //
  };
  useEffect(() => {
    IsConnectedShort(zco, zcheck, zSetUsername);
  }, []);

  useEffect(() => {
    get_csrf(zSetCsrfToken);
  }, []);

  return (
    <div className="mt-10">
      {zco === "connected" && (
        <div className="text-center ">
          <span className="bg-gray-300 rounded p-4">
            You're already connected
          </span>
        </div>
      )}

      {zco === "anonymous" && (
        <>
          <div className="bg-white dark:bg-gray-800 w-full max-w-sm rounded-lg shadow-md overflow-hidden mx-auto">
            <div className="py-4 px-6">
              <h2 className="text-center font-bold text-gray-700 dark:text-white text-3xl mb-3">
                SuperShop
              </h2>

              <h3 className="mt-1 text-center font-medium text-gray-600 dark:text-gray-200 text-xl">
                Login
              </h3>

              {/* <p className="mt-1 text-center text-gray-500 dark:text-gray-400">Login</p> */}

              <form onSubmit={handleSubmit}>
                <div className="mt-4 w-full">
                  <input
                    required
                    onChange={handleChange}
                    name="email"
                    className="w-full mt-2 py-2 px-4 bg-white dark:bg-gray-800 text-gray-700 border border-gray-300 dark:border-gray-600 rounded block placeholder-gray-500 dark:placeholder-gray-400 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                    type="email"
                    placeholder="Email Address"
                    aria-label="Email Address"
                  />
                </div>

                <div className="mt-4 w-full">
                  <input
                    required
                    name="password"
                    onChange={handleChange}
                    className="w-full mt-2 py-2 px-4 bg-white dark:bg-gray-800 text-gray-700 border border-gray-300 dark:border-gray-600 rounded block placeholder-gray-500 dark:placeholder-gray-400 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                    type="password"
                    placeholder="Password"
                    aria-label="Password"
                  />
                </div>

                <div className="flex justify-between items-center mt-4">
                  <Link href="#">
                    <span className="text-gray-600 dark:text-gray-200 text-sm hover:text-gray-500">
                      Forget Password?
                    </span>
                  </Link>

                  <button
                    className="py-2 px-4 bg-gray-700 text-white rounded hover:bg-gray-600 focus:outline-none"
                    type="submit"
                  >
                    Login
                  </button>
                </div>
              </form>
              {LoginErrors.error !== "" && (
                <div className="text-red-600 font-semibold mt-3 mb-5">
                  Incorrect Email address or Password, please retry.
                </div>
              )}
            </div>

            <div className="flex items-center justify-center py-4 bg-gray-100 dark:bg-gray-700 text-center">
              <span className="text-gray-600 dark:text-gray-200 text-sm">
                Don't have an account?{" "}
              </span>

              <Link href="/register">
                <button className="text-blue-600 dark:text-blue-400 font-bold mx-2 text-sm hover:text-blue-500">
                  Register
                </button>
              </Link>
            </div>
          </div>

          <div className="my-6 mx-auto">
            <GoogleOAuthLoginButton />
          </div>
        </>
      )}
    </div>
  );
};

export default Login;
