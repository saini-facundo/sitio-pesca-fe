import { useAuth } from "../providers/Auth";

function HomePage() {
  const { logout } = useAuth();

  const logoutUser = () => {
    logout();
  };

  return (
    <div>
      <p>HOME PAGE</p>

      <button onClick={logoutUser}>logout</button>
    </div>
  );
}

export default HomePage;
