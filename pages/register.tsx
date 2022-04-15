import React, { useState, useEffect } from "react";
import { axiosInstance } from "../common/api_login";
import { useStoreConnected } from "common/zustand_stores";
import Link from "next/link";
import Router from "next/router";

const Register = () => {
  const isco = useStoreConnected((state) => state.zco);

  /// get Token

  const [csrfToken, setCsrfToken] = useState<string | null>(null);

  const get_csrf = () => {
    axiosInstance
      .get("users/get_csrf/")
      .then((response) => {
        if (response.status === 200) {
          let csrftoken = response.headers["x-csrftoken"];
          console.log(csrftoken);
          setCsrfToken(csrftoken);
        }
      })
      .catch((error) => {
        console.log(error);
        return null;
      });
  };

  useEffect(() => {
    IsConnectedShort(zco, zcheck, zSetUsername);
  }, []);
  ////

  const initialFormData = Object.freeze({
    email: "",
    first_name: "",
    last_name: "",
    password1: "",
    password2: "",
  });

  const [formData, updateFormFata] = useState(initialFormData);
  const [registerErrors, setRegisterErrors] = useState({ errors: [] });

  const handleChange = (event) => {
    updateFormFata({
      ...formData,
      [event.target.name]: event.target.value.trim(),
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log(formData);

    let register_endpoint = "/auth/users/";
    let register_data = {
      first_name: formData.first_name,
      last_name: formData.last_name,

      email: formData.email,
      password: formData.password1,
      re_password: formData.password2,
    };

    axiosInstance
      .post(register_endpoint, register_data, {
        withCredentials: true,
        headers: {
          "X-CSRFToken": csrfToken,
        },
      })
      .then((response) => {
        if (response.status === 201) {
          console.log("USER CREATED");
          console.log(response, response.data);
          Router.push("/shop_home");
        }
      })
      .catch((error) => {
        // console.log(error.response.data);
        // console.log(` failed + ${error}`);
        try {
          let register_errors = error.response.data;
          console.log("heere");
          console.log(register_errors);

          // to fix : if register_errors is already an array it'll create an error_list
          // containing all its splitted letters

          let error_list = [];

          for (let i in register_errors) {
            error_list.push(...register_errors[i]);
          }
          console.log(error_list);
          setRegisterErrors({ errors: error_list });
        } catch (error) {
          console.log("no error.response.data");
          let message = "internal error, please retry later";
          setRegisterErrors({ errors: [message] });
        }
      });
  };

  const show_form_errors = () => {
    if (registerErrors.errors.length > 0) {
      return (
        <ul className="mt-4 mx-4 mb-4 list-disc ">
          {registerErrors.errors.map((error, index) => (
            <li className="text-red-600 font-semibold my-3" key={index}>
              {error}
            </li>
          ))}
        </ul>
      );
    }
  };

  return (
    <div className="mt-10">
      {isco === "connected" && (
        <div className="text-center ">
          <span className="bg-gray-300 rounded p-4">
            You're already connected
          </span>
        </div>
      )}

      {isco === "anonymous" && (
        <div className="bg-white dark:bg-gray-800 w-full max-w-sm rounded-lg shadow-md overflow-hidden mx-auto mb-4">
          <div className="py-4 px-6">
            <h2 className="text-center font-bold text-gray-700 dark:text-white text-3xl">
              SuperShop
            </h2>

            <h3 className="mt-1 text-center font-medium text-gray-600 dark:text-gray-200 text-xl">
              Register
            </h3>

            {/* <p className="mt-1 text-center text-gray-500 dark:text-gray-400">
          Login or create account
        </p> */}

            <form onSubmit={handleSubmit}>
              <div className="mt-4 w-full">
                <input
                  onChange={handleChange}
                  required
                  name="email"
                  className="w-full mt-2 py-2 px-4 bg-white dark:bg-gray-800 text-gray-700 border border-gray-300 dark:border-gray-600 rounded block placeholder-gray-500 dark:placeholder-gray-400 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                  type="email"
                  placeholder="Email Address"
                  aria-label="Email Address"
                />
              </div>

              <div className="mt-4 w-full">
                <input
                  onChange={handleChange}
                  required
                  className="w-full mt-2 py-2 px-4 bg-white dark:bg-gray-800 text-gray-700 border border-gray-300 dark:border-gray-600 rounded block placeholder-gray-500 dark:placeholder-gray-400 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                  type="text"
                  name="first_name"
                  placeholder="First Name"
                  aria-label=""
                />
              </div>

              <div className="mt-4 w-full">
                <input
                  onChange={handleChange}
                  required
                  className="w-full mt-2 py-2 px-4 bg-white dark:bg-gray-800 text-gray-700 border border-gray-300 dark:border-gray-600 rounded block placeholder-gray-500 dark:placeholder-gray-400 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                  type="text"
                  name="last_name"
                  placeholder="Last Name"
                  aria-label=""
                />
              </div>

              <div className="mt-4 w-full">
                <input
                  onChange={handleChange}
                  required
                  name="password1"
                  className="w-full mt-2 py-2 px-4 bg-white dark:bg-gray-800 text-gray-700 border border-gray-300 dark:border-gray-600 rounded block placeholder-gray-500 dark:placeholder-gray-400 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                  type="password"
                  placeholder="Password"
                  aria-label="Password"
                />
              </div>

              <div className="mt-4 w-full">
                <input
                  onChange={handleChange}
                  required
                  name="password2"
                  className="w-full mt-2 py-2 px-4 bg-white dark:bg-gray-800 text-gray-700 border border-gray-300 dark:border-gray-600 rounded block placeholder-gray-500 dark:placeholder-gray-400 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                  type="password"
                  placeholder="Reapeat Password"
                  aria-label="Repeat Password"
                />
              </div>

              <div className="flex justify-center  items-center mt-4">
                <button
                  className="py-2 px-4 bg-gray-700 text-white rounded hover:bg-gray-600 focus:outline-none"
                  type="submit"
                >
                  Register
                </button>
              </div>
            </form>
            {show_form_errors()}
          </div>

          <div className="flex items-center justify-center py-4 bg-gray-100 dark:bg-gray-700 text-center">
            <span className="text-gray-600 dark:text-gray-200 text-sm">
              Already have an account ?
            </span>

            <Link href="/login">
              <span className="cursor-pointer text-blue-600 dark:text-blue-400 font-bold mx-2 text-sm hover:text-blue-500">
                Login
              </span>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Register;
