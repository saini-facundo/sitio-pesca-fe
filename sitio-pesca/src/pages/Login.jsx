import { Link } from "react-router-dom";
import { startSignIn } from "../store/auth/thunks";
import { useDispatch } from "react-redux";

function LoginPage() {
  const dispatch = useDispatch();

  const loginUser = () => {
    dispatch(startSignIn({ username: "pescador1", password: "123456" }));
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
