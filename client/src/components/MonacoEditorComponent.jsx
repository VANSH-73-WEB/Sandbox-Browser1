import Editor from "@monaco-editor/react";

import { useFileStore } from "../store/useFileStore";

function MonacoEditorComponent() {
  const { files, activeFile, updateFile } = useFileStore();

  return (
    <Editor
      height="100%"
      theme="vs-dark"
      language="javascript"
      value={files[activeFile]?.code}
      onChange={(value) => updateFile(activeFile, value)}
    />
  );
}

export default MonacoEditorComponent;