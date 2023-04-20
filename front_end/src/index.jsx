import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/global/index.css";
import App from "./App";
import AppContext from "./contextApi/Context";
import { registerLicense } from "@syncfusion/ej2-base";

registerLicense(process.env.REACT_APP_SYNCFUSION_LICENSE_KEY);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AppContext>
      <App />
    </AppContext>
  </React.StrictMode>
);
