import React from "react";
import "../styles/AuthPage.css";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  return (
    <div className="auth-page">
      <h2>Login</h2>
      <form>
        <div>
          <label>Email:</label>
          <input type="email" />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" />
        </div>
        <button type="submit">Login</button>
        <div className="link">
          <a onClick={() => {
            navigate("/register")
          }}>Do not have an account? Sign Up right now!!</a>
        </div>
      </form>
    </div>
  );
}

export default Login;
