import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './FormStyles.css';

function RegisterForm() {
  const [user, setUser] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
    // Optionally, clear errors for this field when the user starts typing
    if (errors[name]) {
      setErrors({ ...errors, [name]: null });
    }
  };

  const validate = (values) => {
    const errors = {};
    if (!values.username.trim()) errors.username = 'Username is required';
    if (!values.email.trim()) errors.email = 'Email is required';
    if (!values.password) errors.password = 'Password is required';
    // Additional validation rules can be added here
    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate(user);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      try {
        // Replace '' with your actual backend endpoint
        const response = await fetch('http://localhost:5000/api/users/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(user),
        });
        
        const data = await response.json();
        
        if (response.ok) {
          console.log('Registration successful', data);
          navigate('/login'); // Redirect user to login page upon successful registration
        } else {
          throw new Error(data.message || 'Failed to register');
        }
      } catch (error) {
        console.error('Registration failed:', error);
        setErrors({ ...errors, registrationFailed: error.message });
      }
    }
  };

  return (
    <div className="form-container">
      <div className="card">
        <h2 className="form-heading">Create Your Account</h2>
        <form onSubmit={handleSubmit} className="form-body">
          <div className="form-group">
            <label>Username</label>
            <input type="text" name="username" className="form-input" value={user.username} onChange={handleChange} />
            {errors.username && <p className="error-message">{errors.username}</p>}
          </div>
          <div className="form-group">
            <label>Email</label>
            <input type="email" name="email" className="form-input" value={user.email} onChange={handleChange} />
            {errors.email && <p className="error-message">{errors.email}</p>}
          </div>
          <div className="form-group">
            <label>Password</label>
            <input type="password" name="password" className="form-input" value={user.password} onChange={handleChange} />
            {errors.password && <p className="error-message">{errors.password}</p>}
          </div>
          {errors.registrationFailed && <p className="error-message">{errors.registrationFailed}</p>}
          <button type="submit" className="form-submit">Register</button>
        </form>
      </div>
    </div>
  );
}

export default RegisterForm;
