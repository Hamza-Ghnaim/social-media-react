import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Posts from "./Posts/Posts.jsx";
import Comments from "./Comments/Comments";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/Posts", element: <Posts /> },
  { path: "/Posts/Comments", element: <Comments /> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
