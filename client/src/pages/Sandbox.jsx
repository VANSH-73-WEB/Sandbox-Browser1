import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import FileExplorer from "../components/FileExplorer";
import EditorTabs from "../components/EditorTabs";
import MonacoEditorComponent from "../components/MonacoEditorComponent";
import PreviewPanel from "../components/PreviewPanel";

function Sandbox() {
  return (
    <div className="h-screen flex flex-col">
      <Navbar />

      <div className="flex flex-1 overflow-hidden">
        <Sidebar />

        <FileExplorer />

        <div className="flex-1 flex flex-col">
          <EditorTabs />

          <div className="grid grid-cols-2 flex-1">
            <div className="border-r border-slate-700 h-full">
              <MonacoEditorComponent />
            </div>

            <div className="h-full overflow-hidden">
              <PreviewPanel />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sandbox;