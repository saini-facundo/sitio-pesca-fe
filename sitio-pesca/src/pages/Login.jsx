import { Navigate, Link } from "react-router-dom";
import { useAuth } from "../providers/Auth";

function LoginPage() {
  const { login } = useAuth();

  const loginUser = () => {
    const user = { name: "facundo", email: "fsaini@blabla.com" };
    login(user);
  };

  return (
    <div>
      <p>Login PAGE</p>
      <button onClick={loginUser}>log</button>
      <Link to="/register">Register</Link>
    </div>
  );
}

export default LoginPage;
