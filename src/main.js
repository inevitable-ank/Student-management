import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css"; // Ensure Tailwind CSS is imported
ReactDOM.createRoot(document.getElementById("root")).render(React.createElement(React.StrictMode, null,
    React.createElement(App, null)));