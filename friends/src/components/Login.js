import React from "react";

const Login = () => {
  return (
    <form>
      <label>
        Username:
        <input type="text" name="username" placeholder="username" />
      </label>
      <label>
        Password:
        <input type="password" name="username" placeholder="password" />
      </label>
    </form>
  );
};

export default Login;
