import dynamic from "next/dynamic";
const DynamicComponent = dynamic(
  () => import("../components/test_google_identity")
);

export default function Test() {
  return (
    <>
      <DynamicComponent />
    </>
  );
}
