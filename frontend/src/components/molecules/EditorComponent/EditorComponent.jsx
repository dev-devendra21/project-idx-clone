import Editor from "@monaco-editor/react";
import { useEffect, useState } from "react";
import { useEditorSocketStore } from "../../../store/EditorSocketStore";
import { useActiveFileTabStore } from "../../../store/ActiveFileTabStore";

const EditorComponent = () => {
  const [editorState, setEditorState] = useState({
    theme: null,
  });

  const { editorSocket } = useEditorSocketStore();
  const { activeFileTab, setActiveFileTab } = useActiveFileTabStore();

  async function downloadTheme() {
    const response = await fetch("/Dracula.json");
    const data = await response.json();
    setEditorState({ ...editorState, theme: data });
  }

  function handleEditorTheme(editor, monaco) {
    monaco.editor.defineTheme("dracula", editorState.theme);
    monaco.editor.setTheme("dracula");
  }

  editorSocket?.on("readFileSuccess", (data) => {
    console.log("editor data: ", data);
    setActiveFileTab(data.path, data.value);
  });

  useEffect(() => {
    downloadTheme();
  }, [downloadTheme]);
  return (
    <>
      {editorState.theme && (
        <Editor
          height={"80vh"}
          width={"75vw"}
          defaultLanguage="javascript"
          defaultValue="// Welcome to code playground"
          value={
            activeFileTab?.value
              ? activeFileTab.value
              : "// Welcome to code playground"
          }
          options={{
            fontSize: 18,
            fontFamily: "cursive",
          }}
          onMount={handleEditorTheme}
        />
      )}
    </>
  );
};

export default EditorComponent;
