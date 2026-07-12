import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import ThemeProvider from "./theme/ThemeProvider.jsx";
import AuthProvider from "./context/AuthContext.jsx";
import NotesProvider from "./context/NotesContext.jsx";
import { ThemeProviderContext } from "./context/ThemeContext.jsx";
import { Toaster } from "sonner";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProviderContext>
        <AuthProvider>
          <NotesProvider>
            <App />
            <Toaster
              position="top-right"
              richColors
              closeButton
              duration={3000}
            />
          </NotesProvider>
        </AuthProvider>
      </ThemeProviderContext>
    </BrowserRouter>
  </React.StrictMode>,
);
