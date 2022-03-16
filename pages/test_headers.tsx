import { useEffect, useState } from "react";
import { axiosInstance } from "../api_login";

export default function TestHeaders() {
  const [domain, setDomain] = useState("");

  useEffect(() => {
    axiosInstance.get("/get_headers/").then((response) => {
      if (response.status == 200) {
        const headers = JSON.stringify(response.data);
        setDomain(headers);
      } else {
        setDomain("error");
      }
    });
  }, []);
  return <div> Test headers , domain : {domain}</div>;
}
