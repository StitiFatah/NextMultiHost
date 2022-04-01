import React, { useState, useEffect } from "react";
import Head from "next/head";
import { IsConnectedShort } from "../common/is_logged_short";
import {
  useStoreUsername,
  useStoreConnected,
  useStoreBarVisible,
} from "../common/zustand_stores";
import ConnectedOnly from "./connected_only";
import Navigation from "./navbar";
import { axiosInstance } from "../api_login";

type TypeProps = {
  children: any;
  connected_only?: boolean;
  home?: boolean;
  className?: string;
};

export default function Layout({
  children,
  connected_only,
  home,
  className,
}: TypeProps) {
  // const { zco, zcheck } = useStoreConnected();
  const zco = useStoreConnected((state) => state.zco);
  const zcheck = useStoreConnected((state) => state.zcheck);

  const { zusername, zSetUsername } = useStoreUsername();

  useEffect(() => {
    if (!zco || !zusername) {
      console.log("Layout : setting isco and username");
      IsConnectedShort(zco, zcheck, zSetUsername);
    }
  }, []);

  // check if is admin

  const [isAdmin, setIsAdmin] = useState<boolean>();

  const check_is_admin = () => {
    axiosInstance
      .get("/users/is_admin/")
      .then((response) => {
        console.log("admin check");
        if (response.status === 200) {
          setIsAdmin(true);
        } else {
          setIsAdmin(false);
        }
      })
      .catch((error) => {
        console.log(error.response);
        setIsAdmin(false);
      });
  };

  useEffect(() => {
    check_is_admin();
  }, []);

  // const isVisible = useStoreBarVisible((state) => state.zisvisible);
  // const setIsVisible = useStoreBarVisible((state) => state.zSetIsVisible);

  return (
    <>
      <Head>
        <title>BlogyCash</title>
        <link rel="icon" href="/shopping-cart.svg" />
      </Head>

      <div className={`h-screen ${className} `}>
        <div className="">
          <Navigation is_admin={isAdmin} />
        </div>

        {connected_only === true && zco === "anonymous" ? (
          <div className="mx-11 my-6">
            <ConnectedOnly />
          </div>
        ) : (
          <div>{children}</div>
        )}
      </div>
    </>
  );
}
