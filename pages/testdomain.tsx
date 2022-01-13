import { axiosInstance } from "../api_login";

export default function TestDomain() {
  const request_test_domain = () => {
    axiosInstance
      .get("/test_domain/")
      .then((response) => {
        if (response.status === 200) {
          console.log(response.data);
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
      <h1> Test Domain</h1>
      <button onClick={request_test_domain}> Request test domain </button>
    </>
  );
}
