import { useFileStore } from "../store/useFileStore";

function FileExplorer() {
  const { files, setActiveFile, addFile } = useFileStore();

  const createNewFile = () => {
    const fileName = prompt("Enter file name");

    if (!fileName) return;

    addFile(`/${fileName}`);
  };

  return (
    <div className="w-64 bg-slate-900 border-r border-slate-700 p-4 overflow-y-auto">
      <button
        onClick={createNewFile}
        className="w-full bg-blue-600 hover:bg-blue-700 py-2 rounded mb-4 transition"
      >
        New File
      </button>

      {Object.keys(files).map((file) => (
        <div
          key={file}
          onClick={() => setActiveFile(file)}
          className="p-2 rounded cursor-pointer hover:bg-slate-700 transition"
        >
          {file}
        </div>
      ))}
    </div>
  );
}

export default FileExplorer;