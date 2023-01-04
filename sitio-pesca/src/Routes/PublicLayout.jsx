import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { getLSValue } from "../helpers/customLocalStorage";
import { startLogIn } from "../store/auth/thunks";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
export const PublicLayout = () => {
  const dispatch = useDispatch();
  const user = getLSValue("user");

  useEffect(() => {
    if (user) {
      dispatch(startLogIn(user));
    }
  }, []);

  const { status } = useSelector((state) => {
    return state.auth;
  });

  if (status === "authenticated") {
    return <Navigate to="/home" />;
  }

  return (
    <div>
      <Outlet />
    </div>
  );
};
