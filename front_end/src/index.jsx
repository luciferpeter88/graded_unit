import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/global/index.css";
import App from "./App";
import AppContext from "./contextApi/Context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AppContext>
      <App />
    </AppContext>
  </React.StrictMode>
);
