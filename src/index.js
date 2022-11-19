import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { AuthService } from "./services/AuthService.js";

const minutesToMilisseconds = (minutes) => minutes * 1000 * 60;
setInterval(() => {
  if (localStorage.getItem("accessToken")) {
    AuthService.refreshToken().then((res) => {
      localStorage.setItem("accessToken", res.data.accessToken);
    });
  }
}, minutesToMilisseconds(1));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);