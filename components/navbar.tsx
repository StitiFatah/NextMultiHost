import { useState, useEffect } from "react";
import Link from "next/link";
import {
  useStoreConnected,
  useStoreUsername,
  useStoreCsrfToken,
  useStoreCart,
  useStoreBarMode,
  useStoreBarVisible,
} from "../common/zustand_stores";
import { IsConnectedShort } from "../common/is_logged_short";
// import { full_list_link, nav_categories } from "./dashboard/db_sidebar";
import { axiosInstance } from "../api_login";

type TypeNavigation = {
  is_admin?: boolean;
  // cart?: boolean;
};

const Navigation = ({ is_admin }: TypeNavigation) => {
  const [openBurger, setOpenBurger] = useState(false);
  const [openSearch, setOpenSearch] = useState(false);

  const links = [
    {
      path: "/shop_home",
      name: "Home",
    },
    {
      path: "/about",
      name: "About",
    },
  ];

  const log_links = [
    { path: "/login", name: "Login" },
    { path: "/register", name: "Register" },
  ];

  const zco = useStoreConnected((state) => state.zco);
  const zcheck = useStoreConnected((state) => state.zcheck);
  const zusername = useStoreUsername((state) => state.zusername);
  const zSetUsername = useStoreUsername((state) => state.zSetUsername);
  const zcsrftoken = useStoreCsrfToken((state) => state.zcsrftoken);
  const zSetCsrfToken = useStoreCsrfToken((state) => state.zSetCsrfToken);

  const zcartState = useStoreCart((state) => state.zcartState);
  const zcartData = useStoreCart((state) => state.zcartData);
  const zSetCart = useStoreCart((state) => state.zSetCart);

  const isVisible = useStoreBarVisible((state) => state.zisvisible);
  const setIsVisible = useStoreBarVisible((state) => state.zSetIsVisible);

  const barMode = useStoreBarMode((state) => state.zbarmode);
  const setBarMode = useStoreBarMode((state) => state.zSetBarMode);

  const logout = () => {
    axiosInstance.get("/users/logout/").then((response) => {
      if (response.status === 200) {
        console.log("logout");
        IsConnectedShort(zco, zcheck, zSetUsername);
        // get_csrf(zSetCsrfToken);
      }
    });
  };

  // get_server_cart
  const cart_url = "/orders/own_cart/";

  // useEffect(() => {
  //   console.log("useEFFECT get cart navbar");
  //   get_cart({
  //     url: own_cart_url,
  //     key: local_cart_key,
  //     zco: zco,
  //     z_set_cart: zSetCart,
  //   });
  // }, [zco]);

  const get_quantity = (data) => {
    let quantity = 0;
    for (let item of data) {
      quantity += item.quantity;
    }
    return quantity;
  };

  return (
    <div>
      <nav className="bg-white shadow dark:bg-gray-800">
        <div className="container px-6 py-3 mx-auto">
          <div className="md:flex md:items-center md:justify-between">
            <div className="flex items-center justify-between">
              <div className="text-xl font-semibold text-gray-700 cursor-pointer">
                <Link href="/">
                  <a className="text-xl font-bold text-gray-800 dark:text-white md:text-2xl hover:text-gray-700 dark:hover:text-gray-300">
                    <span className="text-pink-500 font-semibold">B</span>logy
                    <span className="text-pink-500 font-semibold">C</span>ash
                  </a>
                </Link>
              </div>

              {/* <!-- Mobile menu button --> */}
              <div className="flex md:hidden">
                <button
                  onClick={() => setOpenBurger((prev) => !prev)}
                  type="button"
                  className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
                  aria-label="toggle menu"
                >
                  <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                    <path
                      fillRule="evenodd"
                      d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>

            {/* <!-- Mobile Menu open: "block", Menu closed: "hidden" --> */}
            <div
              className={`md:flex md:items-center md:justify-between flex-1
${openBurger ? "block" : "hidden"} 
                `}
            >
              <div className="flex flex-col -mx-4 md:flex-row md:items-center md:mx-8">
                {links.map((elem, index) => (
                  <Link
                    key={index}
                    href={elem.path}
                    // activeClassName="text-blue-700"
                  >
                    <a
                      className="
                    cursor-pointer
                    px-2 py-1 mx-2 mt-2 text-sm font-medium text-gray-700 md:mt-0 dark:text-gray-200 rounded-md hover:bg-gray-300 dark:hover:bg-gray-700"
                    >
                      {elem.name}
                    </a>
                  </Link>
                ))}
              </div>

              {zco === "connected" && (
                <div className="flex justify-center items-center mt-4 md:mt-0 w-f  ">
                  <div className="mx-2 text-sm text-gray-700 dark:text-gray-200 font-semibold">
                    <Link href="/user_profile">
                      <a>{zusername}</a>
                    </Link>
                  </div>

                  <div onClick={logout} className="cursor-pointer">
                    <a className="border border-gray-300 rounded mx-2 mt-2 md:mt-0 px-4 py-1 text-sm">
                      Logout
                    </a>
                  </div>

                  {/* {is_admin === true && (
                    <>
                      <div className="cursor-pointer">
                        <Link
                          href={full_list_link(Object.keys(nav_categories)[0])}
                        >
                          <a className=" bg-red-400 text-white rounded mx-2 mt-2 md:mt-0 px-4 py-1 text-sm">
                            Dashboard
                          </a>
                        </Link>
                      </div>
                    </>
                  )} */}

                  <button
                    className="flex flex-row"
                    onClick={() => {
                      setBarMode("cart");
                      setIsVisible(true);
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                      />
                    </svg>

                    <div className="ml-1">
                      {zcartState === "fetched" &&
                        get_quantity(zcartData.cart_items)}
                    </div>
                  </button>
                </div>
              )}

              {zco === "anonymous" && (
                <div className="flex items-center mt-4 md:mt-0">
                  {log_links.map((elem, index) => (
                    <Link
                      key={index}
                      href={elem.path}
                      //   activeClassName="text-blue-700"
                    >
                      <a
                        className="
                        cursor-pointer
                      mx-2 mt-2 md:mt-0 px-2 py-1 text-sm text-gray-700 dark:text-gray-200 font-medium rounded-md hover:bg-gray-300 dark:hover:bg-gray-700"
                      >
                        {elem.name}
                      </a>
                    </Link>
                  ))}

                  <button
                    className="flex flex-row"
                    onClick={() => {
                      setBarMode("cart");
                      setIsVisible(true);
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                      />
                    </svg>

                    <div className="ml-1">
                      {zcartState === "fetched" &&
                        get_quantity(zcartData.cart_items)}
                    </div>
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
