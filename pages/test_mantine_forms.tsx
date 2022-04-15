import { useState } from "react";
import { Transition, Paper, Button } from "@mantine/core";
import { useClickOutside } from "@mantine/hooks";

const scaleY = {
  in: { opacity: 1, transform: "scaleY(1)" },
  out: { opacity: 100, transform: "scaleY(0)" },
  common: { transformOrigin: "top" },
  transitionProperty: "transform, opacity",
};

export default function Demo() {
  const [opened, setOpened] = useState(false);
  const clickOutsideRef = useClickOutside(() => setOpened(false));

  return (
    <div
      style={{
        maxWidth: 200,
        position: "relative",
        display: "flex",
        justifyContent: "center",
        margin: "auto",
      }}
    >
      <Button
        className="bg-blue-500 text-white "
        onClick={() => setOpened(true)}
      >
        Open dropdown
      </Button>
      <Transition
        mounted={opened}
        transition={"pop-bottom-right"}
        duration={200}
        timingFunction="ease"
      >
        {(styles) => (
          <Paper
            shadow="md"
            style={{
              ...styles,
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              height: 120,
            }}
            ref={clickOutsideRef}
          >
            Dropdown
          </Paper>
        )}
      </Transition>
    </div>
  );
}
