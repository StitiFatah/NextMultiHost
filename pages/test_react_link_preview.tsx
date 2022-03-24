import dynamic from "next/dynamic";
import { useState } from "react";

const ReactTinyLink = dynamic(
  () => {
    return import("react-tiny-link").then((mod) => mod.ReactTinyLink);
  },
  { ssr: false }
);

export default function TestLinkPreview() {
  const [url, setUrl] = useState("");
  const [proxy, setProxy] = useState("https://cors-anywhere.herokuapp.com");

  return (
    <>
      <input
        className="m-6 border border-blue-500"
        value={url}
        onChange={(event) => {
          setUrl(event.target.value);
        }}
      />

      <input
        type={"checkbox"}
        onClick={() => {
          if (proxy == "https://cors-anywhere.herokuapp.com") {
            setProxy("http://localhost:5000/test_cors");
          } else {
            setProxy("https://cors-anywhere.herokuapp.com");
          }
        }}
      />

      {url && (
        <ReactTinyLink
          cardSize="small"
          showGraphic={true}
          maxLine={2}
          minLine={1}
          proxyUrl={proxy}
          url={url}
        />
      )}
    </>
  );
}
