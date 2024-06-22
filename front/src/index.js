import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import router from "./router/router";
import { RecoilRoot } from "recoil";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <div className="">
    <RecoilRoot>
      <RouterProvider router={router}></RouterProvider>
    </RecoilRoot>
  </div>
  // </React.StrictMode>
);
