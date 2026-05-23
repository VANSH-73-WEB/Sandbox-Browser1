# 🚀 Browser Sandbox

A modern browser-based code sandbox built with React, Tailwind CSS, Zustand, and Sandpack.  
Users can create files, edit code, and preview output directly in the browser.

---

## ✨ Features

- 📁 Dynamic file creation
- 📝 Live code editing
- ⚡ Instant preview using Sandpack
- 🎨 Modern dark UI
- 📂 Sidebar navigation
- 🔐 Login & Register pages
- ⚛️ React-based architecture
- 💨 Tailwind CSS styling
- 🧠 Zustand state management

---

## 🛠️ Tech Stack

- React
- Tailwind CSS
- Zustand
- React Router DOM
- Sandpack React

---

1. Project Overview
Explain the purpose of the project clearly.
Mention the main problem your project solves.
Describe the core features users can use.
Add the tech stack used (React, Node.js, Socket.IO, Monaco Editor, etc.).

2. Architecture
Explain frontend → backend communication flow.
Describe how code execution/rendering works.
Mention important services/libraries used.
Explain data flow briefly.

3. AI Usage
Used ChatGPT to understand Monaco Editor integration.
Used Cursor AI for rapid component scaffolding.
Personally implemented and debugged WebContainer lifecycle management.
Manually validated Socket.IO synchronization logic.
Used AI assistance for improving folder structure and state management ideas.
Independently resolved iframe refresh and dependency caching issues.

4. Tradeoffs
Explain why you chose one solution over another.
Show practical engineering decision-making.
Mention what was intentionally skipped for faster delivery.

5. Challenges
Mention real technical problems you faced.
iframe preview was not refreshing correctly after file updates.
Managing dependency persistence across refreshes was difficult.
Synchronizing file tree updates between editor and preview caused state issues.
Handling asynchronous WebContainer boot timing required careful lifecycle management.
Preventing duplicate socket events during synchronization was challenging.

6. Future Improvements
Add real-time collaborative editing.
Implement terminal emulation inside browser.
Add Docker-based isolated execution environments.
Improve dependency installation performance.
Add authentication and cloud project storage.
Support backend runtime execution.
Add GitHub integration and project export support.

## 📦 Installation

Clone the repository:

```bash
git clone https://github.com/your-username/browser-sandbox.git
