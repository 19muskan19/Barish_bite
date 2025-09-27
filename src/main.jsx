import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { AuthProvider } from "./context/AuthContext";
import { RecipesProvider } from "./context/RecipesContext";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <RecipesProvider>
          <App />
        </RecipesProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
