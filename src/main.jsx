import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import AppContext from "./pages/component/context.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <AppContext>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </AppContext>
);
