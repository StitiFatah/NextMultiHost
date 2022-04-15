import { useState } from "react";

export default function useTestName() {
  const [name, setName] = useState("Fatah");

  return { name, setName };
}
