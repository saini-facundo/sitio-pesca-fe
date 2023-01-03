import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../providers/Auth";

export const PublicLayout = () => {
  const { user } = useAuth();

  if (user) {
    return <Navigate to="/home" />;
  }

  return (
    <div>
      <Outlet />
    </div>
  );
};
