import dynamic from "next/dynamic";

const DynamicEditorJS = dynamic(() => import("../common/editorjs_component"), {
  ssr: false,
});

export default function TestEditorJs() {
  return (
    <>
      <DynamicEditorJS />
    </>
  );
}
