import Header from "@editorjs/header";
import ImageTool from "@editorjs/image";
import Embed from "@editorjs/embed";

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
      byFile: "http://127.0.0.1:5000/post_image_file_editor_js/",
      byUrl: "http://127.0.0.1:5000/post_image_url_editor_js/",
    },
  },
};

export const editor_js_tools = {
  header: configured_header,
  image: configured_image,
  embed: Embed,
};
