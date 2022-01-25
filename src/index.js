import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { AuthContextProvider } from "./Contexts/AuthContextProvider";

ReactDOM.render(
  <React.StrictMode>
    {/* <BrowserRouter> */}
    <AuthContextProvider>
      <App />
    </AuthContextProvider>
    {/* </BrowserRouter> */}
  </React.StrictMode>,
  document.getElementById("root")
);
