// src/components/CloudServicesPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import './CloudServicesPage.css';

function CloudServicesPage() {
  const { currentUser } = useAuth();

  return (
    <div className="cloud-services-page">
      {currentUser ? (
        <div className="cloud-services-content">
          <h1 className="cloud-services-title">Welcome to Angila Cloud Services!</h1>
          <p className="cloud-services-welcome">
            You're logged in as <span className="user-email">{currentUser.email}</span>.
          </p>
          <h2 className="cloud-services-subtitle">Our Services</h2>
          <ul className="cloud-services-list">
            <li className="cloud-service-item">
              <Link to="/CloudStorage">Cloud Storage</Link>
            </li>
            <li className="cloud-service-item">
              <Link to="/CloudComputing">Cloud Computing</Link>
            </li>
            <li className="cloud-service-item">
              <Link to="/CloudNetworking">Cloud Networking</Link>
            </li>
            <li className="cloud-service-item">
              <Link to="/CloudSecurity">Cloud Security</Link>
            </li>
            {/* Add more services as needed */}
          </ul>
        </div>
      ) : (
        <p className="cloud-services-intro">Best Web Services in Town.</p>
      )}
    </div>
  );
}

export default CloudServicesPage;