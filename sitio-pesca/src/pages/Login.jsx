import { useState } from "react";
import { Navigate } from "react-router-dom";

function LoginPage() {
  const [user, setUser] = useState(false);
  return (
    <div>
      {user && <Navigate to="/home" replace={true} />}
      <p>Login PAGE</p>
      <button onClick={() => setUser(true)}>log</button>
    </div>
  );
}

export default LoginPage;
