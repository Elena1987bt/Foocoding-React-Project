import React from 'react';
import './Login.css';

const Login = () => {
  return (
    <div className="login">
      <div className="login__container">
        <form>
          <h5>E-mail</h5>
          <input type="text" />

          <h5>Password</h5>
          <input type="password" />

          <button type="submit" className="login__loginButton">
            Login
          </button>
        </form>

        <p>
          By signing-in you agree to the SHOPIFY Terms and Conditions of Use & Sale. Please see our
          Privacy Policy.
        </p>

        <button className="login__registerButton">Create your Shopify Account</button>
      </div>
    </div>
  );
};

export default Login;
