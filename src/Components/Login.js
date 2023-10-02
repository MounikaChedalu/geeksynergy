
import React, { useState } from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';

const Login = ({ onLogin }) => {
  const [loginData, setLoginData] = useState({
    name: '',
    password: '',
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData({
      ...loginData,
      [name]: value,
    });
  };

  const handleLogin = (e) => {
    e.preventDefault();

    const storedData = JSON.parse(localStorage.getItem('userList')) || [];
    const userData = storedData.find((user)=>user.name === loginData.name && user.password === loginData.password);
    console.log(storedData);
    console.log(loginData);

    if (userData) {
    alert("login successfully");
    navigate('/movielist')
    } else {
      alert('Invalid Credentials');
    }
  };

  return (
    <div>
      <h1 className='heading'>Login form</h1>
      <form onSubmit={handleLogin} className='login-form'>
      <label className='label1'>name:</label>
        <input
          type="name"
          name="name"
          placeholder="Name"
          className='name1'
          value={loginData.name}
          onChange={handleChange}
        />
         <label className='label1'>Password:</label>
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={loginData.password}
          className='password1'
          onChange={handleChange}
        /><br />
        <button type="submit" className='login-button'>Login</button>
      </form>
    </div>
  );
};

export default Login;
