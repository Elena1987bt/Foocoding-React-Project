import React, {useState} from 'react';
import axios from 'axios';
import { Link, useHistory } from 'react-router-dom';

import './Login.css';

const Register = () => {
  const history = useHistory();
  const [usernameReg, setUsernameReg] = useState('');
  const [emailReg, setEmailReg] = useState('');
  const [passwordReg, setPasswordReg] = useState('');

  const register = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5000/register', {
      username:usernameReg,
      email:emailReg,
      password:passwordReg
    })
    .then(response => {
      console.log(response);
      history.push('/login')
      alert('You are succsefully registered. Now you can log in!')
     
    })
    .catch(error => {
      console.log(error);
      alert('There were some problems during your registration process. Please try again!')
    });
    setUsernameReg('');
    setEmailReg('');
    setPasswordReg('');

  }
  return (
    <div className="login">
      <div className="login__container">
        <form>
        <h5>Username</h5>
          <input type="text" value={usernameReg} onChange={(e) => setUsernameReg(e.target.value)}/>
          <h5>E-mail</h5>
          <input type="text" value={emailReg} onChange={(e) => setEmailReg(e.target.value)}/>

          <h5>Password</h5>
          <input type="password" value={passwordReg}  onChange={(e) => setPasswordReg(e.target.value)} />

          <button type="submit" className="login__loginButton" onClick={register}>
            Register
          </button>
        </form>

        <Link to='/login' className="login__registerButton">Already Sign In? Log In here </Link>
      </div>
    </div>
  );
};

export default Register;
