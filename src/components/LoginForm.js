// LoginForm.js
import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate, Link } from 'react-router-dom'; // Import Link from react-router-dom
import './FormStyles.css';

function LoginForm() {
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState({});
  const { login } = useAuth();
  const navigate = useNavigate(); // Initialize useNavigate

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate(credentials);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      try {
        await login(credentials.email, credentials.password);
        console.log('Login successful');
        navigate('/services'); // Redirect to services page after login
      } catch (error) {
        console.error('Failed to log in', error);
        setErrors(prevErrors => ({ ...prevErrors, loginFailed: 'Login failed. Please check your credentials.' }));
      }
    }
  };

  const validate = (values) => {
    const errors = {};
    if (!values.email) errors.email = 'Email is required';
    if (!values.password) errors.password = 'Password is required';
    return errors;
  };

  return (
    <div className="form-container">
      <div className="card">
        <h2 className="form-heading">Login to Your Account</h2>
        <form onSubmit={handleSubmit} className="form-body">
          <div className="form-group">
            <label>Email</label>
            <input type="email" name="email" value={credentials.email} onChange={handleChange} />
            {errors.email && <p className="error-message">{errors.email}</p>}
          </div>
          <div className="form-group">
            <label>Password</label>
            <input type="password" name="password" value={credentials.password} onChange={handleChange} />
            {errors.password && <p className="error-message">{errors.password}</p>}
          </div>
          {errors.loginFailed && <p className="error-message">{errors.loginFailed}</p>}
          <button type="submit" className="form-submit">Login</button>
          <p className="register-link">
            Don't have an account? <Link to="/register">Register here</Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
