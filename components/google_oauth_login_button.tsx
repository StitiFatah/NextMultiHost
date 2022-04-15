import { useEffect, useState } from "react";
import { axiosInstance } from "../api_login";

export default function GoogleOAuthLoginButton() {
  const [blogsiteSlug, setBlogsiteSlug] = useState("");
  const [error, setError] = useState({ error: "" });
  const login_hub_domain =
    process.env.NODE === "production" ? null : "http://localhost:3001";

  const login_hub_path = "google_oauth";

  const get_login_hub_address = ({ child_id }) => {
    return `${login_hub_domain}/${login_hub_path}/${child_id}`;
  };

  const get_blogsite_id = () => {
    axiosInstance
      .get("/get_blogsite_from_request")
      .then((response) => {
        if (response.status === 200) {
          const slug = response.data.slug;
          setBlogsiteSlug(slug);
        }
      })
      .catch((error) => {
        console.log("error"), setError({ error: "can't get blogsite slug" });
      });
  };

  const push_to_login_hub = () => {
    if (!blogsiteSlug) {
      setError({ error: "blogsite slug not present" });
      return;
    }

    const address = get_login_hub_address({ child_id: blogsiteSlug });
    console.log("address", address);
    window.location.href = address;
  };

  useEffect(() => {
    get_blogsite_id();
  }, []);

  return (
    <div>
      <button
        onClick={push_to_login_hub}
        className="bg-blue-400 text-white px-1 py-2 rounded"
      >
        Login with Google
      </button>
    </div>
  );
}
