import React from "react";
import "./login.css";

const Login = () => {
  const submitForm = e => {
    e.preventDefault();
  };
  return (
    <div className="form-wrapper">
      <form onSubmit={submitForm}>
        <input type="text" name="username" placeholder="username" />
        <input type="password" name="username" placeholder="password" />
        <button>Log In</button>
      </form>
    </div>
  );
};

export default Login;
