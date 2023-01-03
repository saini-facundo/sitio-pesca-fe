import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
  defer,
} from "react-router-dom";
import "./index.css";
import { PublicLayout } from "./Routes/PublicLayout";
import { PrivateLayout } from "./Routes/PrivateLayout";
import { AuthLayout } from "./Routes/AuthLayout";
import LoginPage from "./pages/Login";
import RegisterPage from "./pages/Register";
import HomePage from "./pages/Home";
import RankingsPage from "./pages/Rankings";
import UploadPage from "./pages/Upload";

const getUserData = () => {
  new Promise((resolve) =>
    setTimeout(() => {
      const user = window.localStorage.getItem("user");
      resolve(user);
    }, 3000)
  );
};

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route
        element={<AuthLayout />}
        loader={() => defer({ userPromise: getUserData() })}
      >
        <Route element={<PublicLayout />}>
          <Route path="" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Route>

        <Route path="/" element={<PrivateLayout />}>
          <Route path="home" element={<HomePage />} />
          <Route path="rankings" element={<RankingsPage />} />
          <Route path="upload" element={<UploadPage />} />
        </Route>
      </Route>
    </>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
