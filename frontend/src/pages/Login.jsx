// src/pages/Login.js
import React from 'react';

const Login = () => {
  return (
    <div className="login-page">
      <h1>Login</h1>
      <form>
        <div>
          <label>Email:</label>
          <input type="email" name="email" required />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" name="password" required />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
