import { Outlet } from "react-router-dom";
import { BottomNav } from "../components/BottomNav";

export default function Root() {
  return (
    <>
      <Outlet />
      <BottomNav />
    </>
  );
}
