// src/pages/Register.js
import React, { useState } from 'react';
import { apiFetch } from '../api'; // Import the apiFetch function
import { Link } from 'react-router-dom';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Clear any previous error messages
    setError(null);
    setSuccessMessage('');

    // Check if passwords match
    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    const userData = {
      email,
      password,
      password_confirmation: confirmPassword, // Ensure this matches backend validation
    };

    try {
      const data = await apiFetch('/register', 'POST', userData); // Use the apiFetch function
      setSuccessMessage(data.message); // Use the success message from response

    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="register-page">
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input type="email" name="email" required value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div>
          <label>Password:</label>
          <input type="password"name="password" required value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <div>
          <label>Confirm Password:</label>
          <input 
            type="password"name="password_confirmation" required value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
        </div>
        <button type="submit">Register</button>
      </form>
      <p>All ready register <Link to="/login">Login</Link></p>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
    </div>
  );
};

export default Register;
