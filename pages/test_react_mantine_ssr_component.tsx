import { useState } from "react";
import { Modal, Button, Group } from "@mantine/core";

export default function Demo({ name }) {
  const [opened, setOpened] = useState(false);

  return (
    <>
      <div>{name}</div>
      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        title="Introduce yourself!"
      >
        {/* Modal content */}
      </Modal>

      <Group position="center">
        <Button className="bg-blue-500" onClick={() => setOpened(true)}>
          Open Modal
        </Button>
      </Group>
    </>
  );
}
