import React from "react";
import useTestName from "./test_name";
import SecondName from "./test_second_name";

export default function Test() {
  const { name, setName } = useTestName();

  return (
    <>
      <input value={name} onChange={(e) => setName(e.target.value)} />

      <div>My name is {name}</div>

      <SecondName />
    </>
  );
}
