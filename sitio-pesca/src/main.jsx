import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import "./index.css";
import Root from "./pages/Root";
import RankingsPage from "./pages/RankingsPage";
import UploadPage from "./pages/UploadPage";
import LoginPage from "./pages/Login";
import RegisterPage from "./pages/RegisterPage";

const router = createBrowserRouter([
  { path: "", element: <LoginPage /> },
  { path: "/register", element: <RegisterPage /> },
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "home",
        element: <HomePage />,
      },
      {
        path: "rankings",
        element: <RankingsPage />,
      },
      {
        path: "upload",
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
