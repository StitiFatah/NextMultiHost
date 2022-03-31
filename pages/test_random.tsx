import { useRouter } from "next/router";
import TestSubRandom from "./test_sub_random";

export default function TestRandom() {
  const img =
    "https://imgproxy.caprover.archeroe.xyz/zpZu5WA2oSgl6Nc790vMcjX5wYtdoX1XI6k7IJQaudA/rs:fit:0:0:0/g:ce:0:0/czM6Ly9ibGMvdHV4/Mg.";
  return (
    <>
      <TestSubRandom />
      <img src={img} />
    </>
  );
}
