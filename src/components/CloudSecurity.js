import React from 'react';
import './CloudSecurity.css';

const CloudSecurity = () => {
  const securityOptions = [
    {
      id: 1,
      title: 'Web Application Firewall (WAF)',
      description: 'Protect your web applications from common vulnerabilities and attacks.',
      pricePerMonth: 99.99,
      ruleUpdates: 'Automatic',
    },
    {
      id: 2,
      title: 'Encryption and Key Management',
      description: 'Securely manage and store your encryption keys and secrets.',
      pricePerMonth: 49.99,
      keyRotation: 'Automatic',
    },
    {
      id: 3,
      title: 'Identity and Access Management (IAM)',
      description: 'Manage user access and permissions for your cloud resources.',
      pricePerUser: 2.99,
      maxUsers: 'Unlimited',
    },
  ];

  return (
    <div>
      <h2>Cloud Security</h2>
      <p>Robust security solutions to protect your data and applications.</p>

      <div className="security-options">
        {securityOptions.map((option) => (
          <div key={option.id} className="security-option">
            <h3>{option.title}</h3>
            <p>{option.description}</p>
            {option.title === 'Web Application Firewall (WAF)' && (
              <p>
                <strong>Price: ${option.pricePerMonth}/month</strong>
                <br />
                <strong>Rule Updates: {option.ruleUpdates}</strong>
              </p>
            )}
            {option.title === 'Encryption and Key Management' && (
              <p>
                <strong>Price: ${option.pricePerMonth}/month</strong>
                <br />
                <strong>Key Rotation: {option.keyRotation}</strong>
              </p>
            )}
            {option.title === 'Identity and Access Management (IAM)' && (
              <p>
                <strong>Price: ${option.pricePerUser}/user/month</strong>
                <br />
                <strong>Max Users: {option.maxUsers}</strong>
              </p>
            )}
            <button className="btn-choose">Choose Plan</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CloudSecurity;