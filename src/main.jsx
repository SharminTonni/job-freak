import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./Layout/Main";
import Home from "./Pages/Home";
import Information from "./Pages/Information";
import Contact from "./Pages/Contact";
import Guides from "./Pages/Guides";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "information",
        element: <Information></Information>,
      },
      {
        path: "contact",
        element: <Contact></Contact>,
      },
      {
        path: "guides",
        element: <Guides></Guides>,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
