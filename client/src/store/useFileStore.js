import { create } from "zustand";

const defaultFiles = {
  "/App.js": {
    code: `export default function App() {
  return <h1>Hello Sandbox</h1>
}`,
  },
};

export const useFileStore = create((set) => ({
  files: defaultFiles,

  activeFile: "/App.js",

  setActiveFile: (file) =>
    set({
      activeFile: file,
    }),

  updateFile: (path, code) =>
    set((state) => ({
      files: {
        ...state.files,
        [path]: {
          code,
        },
      },
    })),

  addFile: (path) =>
    set((state) => ({
      files: {
        ...state.files,
        [path]: {
          code: "",
        },
      },
    })),

  deleteFile: (path) =>
    set((state) => {
      const updatedFiles = { ...state.files };

      delete updatedFiles[path];

      return {
        files: updatedFiles,
      };
    }),
}));