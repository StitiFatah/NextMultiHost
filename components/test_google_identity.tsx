import Head from "next/head";
import { useEffect, useRef } from "react";

export default function TestGoogleIdentity() {
  const btnref = useRef(null);

  useEffect(() => {
    if (btnref.current) {
      window.google.accounts.id.initialize({
        client_id:
          "424529721680-qfeo1r3i0vucfo7hv088piq1egebv29e.apps.googleusercontent.com",
        callback: (res, error) => {
          // This is the function that will be executed once the authentication with google is finished
          console.log(res);
        },
      });
      window.google.accounts.id.renderButton(btnref.current, {
        theme: "filled_blue",
        size: "medium",
        type: "standard",
        text: "continue_with",
      });
    }
  }, []);

  return (
    <>
      <Head>
        <script
          src="https://accounts.google.com/gsi/client"
          async
          defer
        ></script>
      </Head>

      <div ref={btnref} />
    </>
  );
}
