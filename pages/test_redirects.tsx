import { useRouter } from "next/router";
import { useEffect } from "react";

export default function TestRedirects() {
  const router = useRouter();

  const red = () => {
    window.location = "https://google.com";
  };
  return (
    <>
      {" "}
      <button className="bg-blue-500 text-white" onClick={red}>
        redirect
      </button>
    </>
  );
}
