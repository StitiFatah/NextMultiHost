import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { axiosInstance } from "../../api_login";
import { IsConnectedShort } from "../../common/is_logged_short";
import {
  useStoreConnected,
  useStoreUsername,
} from "../../common/zustand_stores";

export default function GoogleAuthLogin() {
  const router = useRouter();
  const { credential } = router.query;

  const [loginErrors, setLoginErrors] = useState({ error: "'" });

  const zco = useStoreConnected((state) => state.zco);
  const zcheck = useStoreConnected((state) => state.zcheck);

  const zSetUsername = useStoreUsername((state) => state.zSetUsername);

  const google_oauth_login = ({ credential }) => {
    axiosInstance
      .post("/users/google_oauth_login/", { credential: credential })
      .then((response) => {
        if (response.status === 200) {
          console.log("LOGGED IN", response.data);
          setLoginErrors({ error: "" });
          IsConnectedShort(zco, zcheck, zSetUsername);
          // get_csrf(zSetCsrfToken);
          router.push("/");
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
  };

  // //

  useEffect(() => {
    if (router.isReady) {
      google_oauth_login({ credential: credential });
    }
  }, [router.isReady]);

  return <div>... Loading</div>;
}
