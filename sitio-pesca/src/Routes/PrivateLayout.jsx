import { Navigate, Outlet } from "react-router-dom";
import { BottomNav } from "../components/BottomNav";
import { useSelector } from "react-redux";
import { getLSValue } from "../helpers/customLocalStorage";
import { startLogout } from "../store/auth/thunks";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
export const PrivateLayout = () => {
  const dispatch = useDispatch();
  const user = getLSValue("user");

  useEffect(() => {
    if (!user) {
      dispatch(startLogout());
    }
  }, []);

  const { status } = useSelector((state) => {
    return state.auth;
  });

  if (status === "not-authenticated") {
    return <Navigate to="" />;
  }

  return (
    <div>
      <Outlet />
      <BottomNav />
    </div>
  );
};
