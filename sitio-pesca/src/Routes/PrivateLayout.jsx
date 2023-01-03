import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../providers/Auth";
import { BottomNav } from "../components/BottomNav";

export const PrivateLayout = () => {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/" />;
  }

  return (
    <div>
      <Outlet />
      <BottomNav />
    </div>
  );
};
