import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "@fortawesome/fontawesome-free/js/all.js";
import AuthLogic from "./component/service/authLogic";

const authLogic = new AuthLogic();
const root = ReactDOM.createRoot(document.querySelector("#root"));
console.log("test");
root.render(
  <>
    <BrowserRouter>
      <App authLogic={authLogic} />
    </BrowserRouter>
  </>
);
