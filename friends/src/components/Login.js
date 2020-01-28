import React from "react";
import "./login.css";

const Login = () => {
  return (
    <div className="form-wrapper">
      <form>
        <input type="text" name="username" placeholder="username" />
        <input type="password" name="username" placeholder="password" />
        <button>Log In</button>
      </form>
    </div>
  );
};

export default Login;
