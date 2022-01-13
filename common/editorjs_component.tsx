import EditorJS from "@editorjs/editorjs";
import React from "react";
import { createReactEditorJS } from "react-editor-js";
import { axiosInstance } from "../api_login";
import { editor_js_tools } from "../common/editorjs_tools";

const ReactEditorJS = createReactEditorJS();

export default function TestEditorJs() {
  const editorJS = React.useRef(null);

  const handleInitialize = (instance) => {
    editorJS.current = instance;
  };

  const blocks1 = {
    blocks: [
      {
        type: "header",
        data: {
          text: "Testing Editor JS",
          level: 1,
        },
      },
      { type: "paragraph", data: { text: "Blocks 1 paragraph <b>bold</b>" } },
    ],
  };

  const handleSaveAsync = React.useCallback(async () => {
    try {
      const savedData = await editorJS.current.save();
      console.log(savedData);
    } catch (error) {
      console.log(error);
    }
  }, []);

  const handleSave = React.useCallback(() => {
    editorJS.current
      .save()
      .then((response) => {
        console.log(response);
        // getEditorJs();
        createEditorJS(response);
      })
      .catch((error) => console.log(error));
  }, []);

  const createEditorJS = (editor_js_content) => {
    axiosInstance
      .post("/create_editor_js/", { body: editor_js_content })
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  };

  const getEditorJs = () => {
    axiosInstance
      .get("/get_editor_js/1/")
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  };
  return (
    <>
      <h1>Editor.js</h1>

      <button
        onClick={() => {
          editorJS.current.focus();
        }}
      >
        Focus Editor{" "}
      </button>
      <br />
      <button onClick={handleSave}> Save Content </button>

      <br />
      <ReactEditorJS
        defaultValue={blocks1}
        inlineToolbar={true}
        tools={editor_js_tools}
        onInitialize={handleInitialize}
        autofocus={true}
        nReady={() => {
          console.log("Ready from React Editor");
        }}
      />
    </>
  );
}
