import React, { useState } from 'react';
import './Registrationform.css';
import { Link, useNavigate } from 'react-router-dom';

const Signup = () => {
  const [userData, setUserData] = useState({
    name: '',
    password: '',
    email: '',
    phoneNumber: '',
    profession: '',
  });

  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const existingUsers = JSON.parse(localStorage.getItem('userList')) || [];

    // Check if the email already exists
    const isEmailExists = existingUsers.some((user) => user.email === userData.email);

    if (isEmailExists) {
      alert('User with this email already exists.');
      console.log(setErrorMessage);
    } else {
      const updatedUsers = [...existingUsers, userData];
      localStorage.setItem('userList', JSON.stringify(updatedUsers));
      alert('Registration successful!');
      navigate('/login');
    }
  };

  return (
    <div>
      <h1 className='heading'>Signup form</h1>
      <form onSubmit={handleSubmit} className='form-container'>
        <label className='label'>Name:</label>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={userData.name}
          className='name'
          required
          onChange={handleChange}
        />
        <label className='label'>Password:</label>
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={userData.password}
          required
          className='password'
          onChange={handleChange}
        />
        <label className='label'>Email:</label>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={userData.email}
          className='email'
          required
          onChange={handleChange}
        />
        {errorMessage && <p className='error-message'>{errorMessage}</p>}
        <label className='label'>Phone:</label>
        <input
          type="text"
          name="phoneNumber"
          placeholder="Phone Number"
          value={userData.phoneNumber}
          className='phone'
          onChange={handleChange}
          required
          pattern="[0-9]{10}"
        /><br /><br /><br />
        <label className='label-profession'>Profession:</label>
        <select
          name="profession"
          value={userData.profession}
          onChange={handleChange}
          required
          className='profession'
        >
          <option value="">Select Profession</option>
          <option value="Software Developer">Software Developer</option>
          <option value="Data Scientist">Data Scientist</option>
          <option value="Network Administrator">Network Administrator</option>
          <option value="Database Administrator">Database Administrator</option>
          <option value="System Administrator">System Administrator</option>
          <option value="Cybersecurity Analyst">Cybersecurity Analyst</option>
          <option value="IT Project Manager">IT Project Manager</option>
          <option value="QA Tester">QA Tester</option>
          <option value="Other">Other</option>
        </select>
        <button type="submit" className='button'>Register</button><br />
        <span>if you have an account? </span>
        <Link to="/login">Login</Link>
      </form>
    </div>
  );
};

export default Signup;
