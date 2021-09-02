import React, { useState } from 'react';
import axios from 'axios';
import { Link, useHistory } from 'react-router-dom';
import { useAppContext } from '../../context/context';
import './Login.css';

const Login = () => {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [{}, dispatch] = useAppContext();
  const login = (e) => {
    e.preventDefault();
    axios
      .post('http://127.0.0.1:5000/login', {
        email: email,
        password: password,
      })
      .then(function (response) {
        history.push('/');
        alert('You are logged in successfully!');
        dispatch({
          type: 'SET_USER',
          payload: true,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
    setEmail('');
    setPassword('');
  };
  return (
    <div className="login">
      <div className="login__container">
        <form>
          <h5>E-mail</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" className="login__loginButton" onClick={login}>
            Login
          </button>
        </form>

        <p>
          By signing-in you agree to the SHOPIFY Terms and Conditions of Use &
          Sale. Please see our Privacy Policy.
        </p>

        <Link to="/register" className="login__registerButton">
          Create your Shopify Account
        </Link>
      </div>
    </div>
  );
};

export default Login;
