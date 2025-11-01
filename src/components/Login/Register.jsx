import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    phone: '',
    address: ''
  });
  const navigate = useNavigate();

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const res = await axios.post('http://127.0.0.1:8000/api/client/register', form);
      console.log('Register response:', res.data);
      if (res.data.success) {
        alert('Registration successful! Please login.');
        navigate('/login');
      } else {
        alert('Registration failed.');
      }
    } catch (err) {
      console.error('Register error:', err.response?.data || err.message);
      alert('Something went wrong.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Register</h2>
      <input type="text" name="name" placeholder="Name" onChange={handleChange} required /><br/>
      <input type="email" name="email" placeholder="Email" onChange={handleChange} required /><br/>
      <input type="password" name="password" placeholder="Password" onChange={handleChange} required /><br/>
      <input type="text" name="phone" placeholder="Phone" onChange={handleChange} /><br/>
      <input type="text" name="address" placeholder="Address" onChange={handleChange} /><br/>
      <button type="submit">Register</button>
    </form>
  );
};

export default Register;
