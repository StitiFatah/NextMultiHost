import { useState } from "react";
import { Modal, Button, Group } from "@mantine/core";
import Demo from "./test_react_mantine_ssr_component";

export async function getStaticProps() {
  return {
    props: {
      name: "fatah",
    },
  };
}

export default function Test({ name }) {
  return (
    <>
      <Demo />
    </>
  );
}
