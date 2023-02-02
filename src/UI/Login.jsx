import React from "react";
import "./Login.css";

const Login = () => {
  return (
    <div class="enclosing">
      <p class="title">Log in</p>
      <form class="form" method="get">
        <input
          id="email"
          class="input"
          type="email"
          placeholder="Enter Username"
          name="uname"
          required
        />
        <input
          class="input"
          type="password"
          placeholder="Enter Password"
          name="psw"
        />
        <input class="button" id="button" type="submit" value="Log In" />
      </form>
    </div>
  );
};

export default Login;
