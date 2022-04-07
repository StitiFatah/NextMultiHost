import EditorJS from "@editorjs/editorjs";
import React, { useEffect, useState } from "react";
import { createReactEditorJS } from "react-editor-js";
import { axiosInstance } from "../api_login";
import { editor_js_tools } from "../common/editorjs_tools";
import Layout from "../components/layout";
import { get_csrf } from "./get_csrf";
import { useStoreCsrfToken } from "./zustand_stores";
import cookieCutter from "cookie-cutter";
import { checkCookies, getCookie, getCookies } from "cookies-next";

const ReactEditorJS = createReactEditorJS();

export default function TestEditorJs() {
  const zcsrftoken = useStoreCsrfToken((state) => state.zcsrftoken);
  const zSetCsrfToken = useStoreCsrfToken((state) => state.zSetCsrfToken);

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

  // const handleSaveAsync = React.useCallback(async () => {
  //   try {
  //     const savedData = await editorJS.current.save();
  //     console.log(savedData);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }, []);

  const handleSave = () => {
    editorJS.current
      .save()
      .then((response) => {
        // console.log(response);
        // console.log("hsave", zcsrftoken);
        create_article({
          title: title,
          description: description,
          image: image,
          body: response,
        });
      })
      .catch((error) => console.log(error));
  };

  const create_article = ({
    title,
    description,
    image,
    body,
  }: {
    title: string;
    description: string;
    image: string;
    body: any;
  }) => {
    axiosInstance
      .post(
        "/blogsite/create_article/",
        // "/blogsite/test_simple_post/",
        {
          title: title,
          description: description,
          image: image,
          body: body,
          is_post: true,
          access: [33],
          authors: [3],
          tags: [{ name: "test_tag" }],
        }
        // {
        // withCredentials: true,
        // headers: {
        // "X-CSRFToken": cookieCutter.get("csrftoken"),
        // },
        // }
      )
      .then((response) => {
        if (response.status === 201) {
          console.log(response.data);
        } else {
          console.log("error");
        }
      });
  };

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

  const [title, setTitle] = useState("random title");
  const [description, setDescription] = useState(" random description");
  const [image, setImage] = useState(
    "https://imgproxy.caprover.archeroe.xyz/rAGOZiKKmC0Y6CBeEeXoOxiCIXAfHcVfhrrZ21Ei_fQ/rs:fit:200:0:0/g:ce:0:0/czM6Ly9ibGMvYXJj/aG1vdW50YWluMjl5/MzA."
  );
  // const [title, setTitle] = useState("");

  useEffect(() => {
    !zcsrftoken && get_csrf(zSetCsrfToken);
  }, []);

  return (
    <>
      <Layout connected_only={true}>
        <h1 className="text-3xl text-center my-5">Editor.js</h1>
        <div className="flex">
          <button
            className="border border-gray-600 px-4 py-2 m-4"
            onClick={() => {
              editorJS.current.focus();
              console.log(cookieCutter.get("csrftoken"));
              // const ck = checkCookies("csrftoken");
              // console.log(ck);
              // const cs = getCookie("csrftoken");
              // console.log(cs);
              // console.log(getCookies());
            }}
          >
            Focus Editor
          </button>
          <button
            className="border border-gray-600 px-4 py-2 m-4 "
            onClick={handleSave}
          >
            Save Content
          </button>
          <button
            className="border border-gray-600 px-4 py-2 m-4 "
            onClick={() => {
              editorJS.current.readOnly.toggle();
            }}
          >
            Toggle Read Only
          </button>
        </div>

        <div className="flex flex-col ">
          <input
            className="border border-gray-300 py-1 px-2 m-4 "
            value={title}
            onChange={(event) => {
              setTitle(event.target.value);
            }}
          />
          <input
            className="border border-gray-300 py-1 px-2 m-4 "
            value={description}
            onChange={(event) => {
              setDescription(event.target.value);
            }}
          />
          <input
            className="border border-gray-300 py-1 px-2 m-4 "
            value={image}
            onChange={(event) => {
              setImage(event.target.value);
            }}
          />{" "}
        </div>

        <ReactEditorJS
          defaultValue={blocks1}
          inlineToolbar={true}
          tools={editor_js_tools}
          onInitialize={handleInitialize}
          autofocus={true}
          readOnly={false}
          Ready={() => {
            console.log("Ready from React Editor");
          }}
        />
      </Layout>
      <style global jsx>{`
        .preview_limit {
          color: red;
        }

        .preview_limit {
          margin-top: 50px;
          display: flex;
          border-color: green;
        }
        .preview_limit:before,
        .preview_limit:after {
          content: "";
          flex: 1;
          border-bottom: groove 2px;
          border-color: light-gray;
          margin: auto 0.25em;
        }
      `}</style>
    </>
  );
}
