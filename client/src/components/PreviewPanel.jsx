import { Sandpack } from "@codesandbox/sandpack-react";

import { useFileStore } from "../store/useFileStore";

function PreviewPanel() {
  const { files } = useFileStore();

  const sandpackFiles = {};

  Object.keys(files).forEach((file) => {
    sandpackFiles[file] = {
      code: files[file].code,
    };
  });

  // Ensure React entry files exist
  if (!sandpackFiles["/App.js"]) {
    sandpackFiles["/App.js"] = {
      code: `
export default function App() {
  return <h1>Hello Sandbox</h1>
}
      `,
    };
  }

  if (!sandpackFiles["/index.js"]) {
    sandpackFiles["/index.js"] = {
      code: `
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);
      `,
    };
  }

  return (
    <div className="h-full">
      <Sandpack
  template="react"
  theme="dark"
  files={sandpackFiles}
  options={{
    showConsole: true,
    showNavigator: true,
    autorun: true,
    recompileMode: "immediate",
    editorHeight: 700,
  }}
/>
    </div>
  );
}

export default PreviewPanel;