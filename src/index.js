import React from "react";
import { render } from "react-dom";
//import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Customers from "./Customers/Customers";
import Items from "./Items/Items";
import ViewCustomer from "./Customers/ViewCustomer";
import ViewItem from './Items/ViewItem'
import Welcome from "./tickIt";
import Seed from "./seed"
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App Element={Welcome} />,
  },
  {
    path: "/items",
    element: <App Element={Items} />,
    children: [
      {
        path: ":id",
        element: <App Element={ViewItem}  />,
      },
    ],
  },
  {
    path: "/item",
    children: [
      {
        path: ":id",
        element: <App Element={ViewItem}  />,
      },
    ],
  },
  {
    path: "/seed",
    element: <App Element={Seed} />
  },
  {
    path: "/customers",
    element: <App Element={Customers}/>,
    children: [
      {
        path: ":id",
        element: <App Element={ViewCustomer}  />,
      },
    ],
  },
  {
    path: "/customer",
    children: [
      {
        path: ":id",
        element: <App Element={() => <ViewCustomer />} />,
      },
    ],
  },
]);

render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
  document.getElementById("root")
);
