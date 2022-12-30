import { useState } from "react";
import { Navigate, Link } from "react-router-dom";

function LoginPage() {
  const [user, setUser] = useState(false);
  return (
    <div>
      {user && <Navigate to="/home" replace={true} />}
      <p>Login PAGE</p>
      <button onClick={() => setUser(true)}>log</button>
      <Link to="/register">Register</Link>
    </div>
  );
}

export default LoginPage;
