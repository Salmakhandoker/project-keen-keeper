

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { AppProvider } from "./context/AppContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppProvider>   {/* wrapper */}
      <App />       {/* main app */}
    </AppProvider>
  </React.StrictMode>
);