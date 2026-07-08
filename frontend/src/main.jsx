import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import ThemeProvider from "./theme/ThemeProvider.jsx";
import UIProvider from "./context/UIContext.jsx";
import AuthProvider from "./context/AuthContext.jsx";
import NotesProvider from "./context/NotesContext.jsx";
import { ThemeProviderContext } from "./context/ThemeContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProviderContext>
        <UIProvider>
          <AuthProvider>
            <NotesProvider>
              <App />
            </NotesProvider>
          </AuthProvider>
        </UIProvider>
      </ThemeProviderContext>
    </BrowserRouter>
  </React.StrictMode>,
);
