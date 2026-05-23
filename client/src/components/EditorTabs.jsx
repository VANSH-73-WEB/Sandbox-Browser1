import { useFileStore } from "../store/useFileStore";

function EditorTabs() {
  const { files, activeFile, setActiveFile } = useFileStore();

  return (
    <div className="flex bg-slate-900 border-b border-slate-700">
      {Object.keys(files).map((file) => (
        <button
          key={file}
          onClick={() => setActiveFile(file)}
          className={`px-4 py-2 border-r border-slate-700 ${
            activeFile === file ? "bg-slate-800" : ""
          }`}
        >
          {file}
        </button>
      ))}
    </div>
  );
}

export default EditorTabs;