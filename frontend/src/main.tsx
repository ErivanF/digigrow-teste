import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import TaskProvider from "./Providers/TaskProvider.tsx";
import { BrowserRouter } from "react-router";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <TaskProvider>
        <App />
      </TaskProvider>
    </BrowserRouter>
  </StrictMode>
);
