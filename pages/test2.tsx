import axios from "axios";

const BASE_API_URL = "http://localhost:5000/";

const axiosInstance = axios.create({
  baseURL: BASE_API_URL,
  // timeout: 10000,
  // withCredentials: true,
  headers: {
    accept: "application/json",
  },
});

export async function getServerSideProps(context) {
  const url = "shop/list_categories/";

  const get_category_list = await axios.get(
    "http://127.0.0.1:5000/domain_name/localhost/"
  );
  const category_list = await get_category_list.data;
  // Pass data to the page via props
  return { props: { category_list } };
}

export default function Test2({ category_list }) {
  return <div>hello {category_list.name}</div>;
}
