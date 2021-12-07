import axios from "axios";
import { useEffect, useState } from "react";
import { axiosInstance } from "../api_login";

const get_name = (host_name) => {
  axios
    .get(`http://localhost:5000/domain_name/${host_name}/`)
    .then((response) => {
      return response.data.name;
    })
    .catch((error) => console.log(error));
};

const get_articles = () => {
  axiosInstance
    .get("/shop/list_all_items/")
    .then((response) => console.log(response.data))
    .catch((error) => console.log(error));
};

export default function Test1() {
  const [domainName, setDomainName] = useState("");

  return (
    <>
      <input onChange={(e) => setDomainName(e.target.value)} />

      <button onClick={() => get_name(domainName)}>Click</button>
      <button onClick={() => get_articles()}>get Articles</button>
    </>
  );
}
