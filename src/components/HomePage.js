import React from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate
import './HomePage.css';
import homepageImage from './images/homepage.jpg';

function HomePage() {
  const navigate = useNavigate(); // Initialize useNavigate

  // Function to handle Admin Dashboard navigation with password prompt
  const handleAdminNavigate = () => {
    const adminPassword = prompt("Please enter the admin key/password:");
    const correctPassword = "1234"; // This should be secure in a real app

    if (adminPassword === correctPassword) {
      navigate('/admin'); // Navigate to Admin Dashboard if password is correct
    } else {
      alert("Incorrect password"); // Optionally alert the user of incorrect password
    }
  };

  return (
    <div className="home-container">
      <nav className="top-nav">
        <h1 className="heading">Angila Online Cloud Service Provider</h1>
        <div className="auth-links">
          <Link to="/login" className="btn">Login</Link>
          <button onClick={handleAdminNavigate} className="btn admin-btn">Admin Dashboard</button> 
        </div>
      </nav>
      <header className="header-content" style={{ backgroundImage: `url(${homepageImage})` }}>
        <p className="description">Revolutionizing Your Digital Experience. Welcome to Angila Cloud Services, your premier destination for secure, scalable, and sophisticated cloud storage solutions.</p>
      </header>
      <footer className="footer-content">
        <p>Contact us at: contact@Angila.com</p>
      </footer>
    </div>
  );
}

export default HomePage;
