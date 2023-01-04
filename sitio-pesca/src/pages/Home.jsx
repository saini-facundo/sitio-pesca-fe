import { startLogout } from "../store/auth/thunks";
import { useDispatch } from "react-redux";
function HomePage() {
  const dispatch = useDispatch();
  const logoutUser = () => {
    dispatch(startLogout());
  };

  return (
    <div>
      <p>HOME PAGE</p>

      <button onClick={logoutUser}>logout</button>
    </div>
  );
}

export default HomePage;
