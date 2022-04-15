import { stringify } from "querystring";
import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";
import GoogleLogin, { useGoogleLogin } from "react-google-login";
import { json } from "stream/consumers";

export default function TestGoogleAuth() {
  const [resp, setResp] = useState();

  const responseGoogle = (response) => {
    console.log(response);
    setResp(response);
  };

  const google_client_id =
    "424529721680-qfeo1r3i0vucfo7hv088piq1egebv29e.apps.googleusercontent.com";

  const { signIn } = useGoogleLogin({
    clientId: google_client_id,
    onSuccess: responseGoogle,
    onFailure: responseGoogle,
    cookiePolicy: "single_host_origin",
  });
  const btn = useRef(null);

  //   useEffect(() => {
  //     setTimeout(() => {
  //       console.log("done");
  //       console.log(window !== undefined);
  //       signIn();
  //     }, 5000);
  //   }, []);

  //   useEffect(() => {
  //   }, [resp]);
  return (
    <>
      {/* <GoogleLogin
        className="btn"
        clientId={google_client_id}
        buttonText="Login"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={"single_host_origin"}
      /> */}

      <button ref={btn} onClick={() => signIn()}>
        {" "}
        sign in{" "}
      </button>
      <div>hello</div>
      <div>{resp && stringify(resp)}</div>
    </>
  );
}
