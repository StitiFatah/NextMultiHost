export class PreviewLimit {
  static get toolbox() {
    return {
      title: "Preview Limit",
      icon: ' <svg xmlns="http://www.w3.org/2000/svg" width="17" height="15" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke- width="2" >  <path stroke-linecap="round" stroke-linejoin="round" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />  </svg>',
      //   icon: '<svg width="17" height="15" viewBox="0 0 336 276" xmlns="http://www.w3.org/2000/svg"><path d="M291 150V79c0-19-15-34-34-34H79c-19 0-34 15-34 34v42l67-44 81 72 56-29 42 30zm0 52l-43-30-56 30-81-67-66 39v23c0 19 15 34 34 34h178c17 0 31-13 34-29zM79 0h178c44 0 79 35 79 79v118c0 44-35 79-79 79H79c-44 0-79-35-79-79V79C0 35 35 0 79 0z"/></svg>',
    };
  }

  constructor({ data }) {
    this.data = data;
  }
  
  static get isReadOnlySupported() {
    return true;
  }

  render() {
    if (this.preview_limit_already_exist()) {
      alert(
        "you can't have 2 preview limits, please delete the existing one before"
      );
      return;
    }
    this.preview_limit_text = document.createElement("div");
    this._create_preview_limit();
    return this.preview_limit_text;
  }

  _create_preview_limit() {
    this.preview_limit_text.textContent = "PREVIEW LIMIT";
    this.preview_limit_text.classList.add("preview_limit");
  }

  preview_limit_already_exist() {
    if (document.querySelector(".preview_limit")) {
      return true;
    } else {
      return false;
    }
  }

  save(blockContent) {
    return {};
  }
}
