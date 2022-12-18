import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import "./index.css";
import Root from "./pages/Root";
import RankingsPage from "./pages/RakingsPage";
import UploadPage from "./pages/UploadPage";
import { BottomNav } from "./components/BottomNav";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/home",
        element: <HomePage />,
      },
      {
        path: "/rankings",
        element: <RankingsPage />,
      },
      {
        path: "/upload",
        element: <UploadPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
