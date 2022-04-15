import { useState } from "react";
import { Modal, Button, Group } from "@mantine/core";

export default function Demo() {
  const [modalOpened, setModalOpened] = useState(false);

  const [modalContent, setModalContent] = useState({
    title: "",
    description: "",
    div_svg: <div></div>,
  });

  const success_modal_title = "Message successfuly sent";
  const error_modal_title = "An error happened";

  const success_modal_description =
    "We will get in touch with you as soon as possible.";
  const error_modal_description = "Please retry in few moments";

  const success_modal_div_svg = (
    <div className="flex justify-center items-center h-12 w-12 rounded-full bg-green-100">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 text-green-600 "
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
      </svg>
    </div>
  );

  const error_modal_div_svg = (
    <div className="flex justify-center items-center h-12 w-12 rounded-full bg-red-100">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 text-red-600"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    </div>
  );

  const set_success_modal = () => {
    setModalContent({
      title: success_modal_title,
      description: success_modal_description,
      div_svg: success_modal_div_svg,
    });
  };

  const set_error_modal = () => {
    setModalContent({
      title: error_modal_title,
      description: error_modal_description,
      div_svg: error_modal_div_svg,
    });
  };

  return (
    <>
      <Modal
        opened={modalOpened}
        onClose={() => setModalOpened(false)}
        centered={true}
        overlayColor="#ab84a4"
        withCloseButton={false}
        radius="md"
      >
        <div className="flex flex-col justify-center items-center">
          {modalContent.div_svg}
          <div className="flex flex-col justify-center items-center mt-3  sm:mt-5">
            <h2 className="text-lg font-medium text-center tex-gray-900">
              {modalContent.title}
            </h2>
            <p className="mt-2 text-sm text-center text-gray-500">
              {modalContent.description}
            </p>
          </div>
        </div>
      </Modal>

      <Group position="center" className="mt-5">
        <Button
          className=" bg-blue-500 text-white"
          onClick={() => {
            set_success_modal(), setModalOpened(true);
          }}
        >
          Open Success Modal
        </Button>
        <Button
          className="bg-red-500 text-white"
          onClick={() => {
            set_error_modal(), setModalOpened(true);
          }}
        >
          Open Modal
        </Button>
      </Group>
    </>
  );
}
