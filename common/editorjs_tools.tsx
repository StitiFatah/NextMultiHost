import Header from "@editorjs/header";
import ImageTool from "@editorjs/image";
import Embed from "@editorjs/embed";
import { PreviewLimit } from "./editor_js_preview_limit_plugin/preview_limit";
import { BASE_API_URL } from "../api_login";

const configured_header = {
  class: Header,
  config: {
    placeholder: "Enter a header",
    levels: [1, 2, 3, 4],
    defaultLevel: 3,
  },
};

const configured_image = {
  class: ImageTool,
  config: {
    endpoints: {
      byFile: `${BASE_API_URL}/blogsite/upload_image_async/`,
      byUrl: "http://127.0.0.1:5000/post_image_url_editor_js/",
    },
  },
};

export const editor_js_tools = {
  header: configured_header,
  image: configured_image,
  embed: Embed,
  preview_limit: PreviewLimit,
};
