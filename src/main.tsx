import React from "react";
import ReactDOM from "react-dom/client";
import Root from "./routes/root";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store";
import LazyQuery from "./routes/lazy-query";
import InitiateQueryState from "./routes/initiate-query-state";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
  {
    path: "/lazy-query",
    element: <LazyQuery />,
  },
  {
    path: "/initiate-query-state",
    element: <InitiateQueryState />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
