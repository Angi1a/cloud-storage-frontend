import React from 'react';
import './CloudComputing.css';

const CloudComputing = () => {
  const computingOptions = [
    {
      id: 1,
      vendor: 'Amazon Web Services',
      title: 'Amazon EC2',
      description: 'Scalable and customizable virtual machines for your computing needs.',
      pricePerHour: 0.05,
      cores: 2,
      ram: '4GB',
      vendorLink: 'https://aws.amazon.com/ec2/',
    },
    {
      id: 2,
      vendor: 'Google Cloud',
      title: 'Google Cloud Functions',
      description: 'Run your code without provisioning or managing servers.',
      pricePerMillion: 0.20,
      maxMemory: '3GB',
      maxTimeout: '15 minutes',
      vendorLink: 'https://cloud.google.com/functions',
    },
    {
      id: 3,
      vendor: 'Microsoft Azure',
      title: 'Azure Container Instances',
      description: 'Deploy and manage containerized applications with ease.',
      pricePerMonth: 29.99,
      instances: 'Unlimited',
      storage: '50GB',
      vendorLink: 'https://azure.microsoft.com/en-us/services/container-instances/',
    },
  ];

  return (
    <div>
      <h2>Cloud Computing</h2>
      <p>Powerful and flexible computing solutions for your applications.</p>
      <div className="computing-options">
        {computingOptions.map((option) => (
          <div key={option.id} className="computing-option">
            <h3>{option.vendor}</h3>
            <h4>{option.title}</h4>
            <p>{option.description}</p>
            {option.title === 'Amazon EC2' && (
              <p>
                <strong>Price: ${option.pricePerHour}/hour</strong>
                <br />
                <strong>Cores: {option.cores}</strong>
                <br />
                <strong>RAM: {option.ram}</strong>
              </p>
            )}
            {option.title === 'Google Cloud Functions' && (
              <p>
                <strong>Price: ${option.pricePerMillion}/million executions</strong>
                <br />
                <strong>Max Memory: {option.maxMemory}</strong>
                <br />
                <strong>Max Timeout: {option.maxTimeout}</strong>
              </p>
            )}
            {option.title === 'Azure Container Instances' && (
              <p>
                <strong>Price: ${option.pricePerMonth}/month</strong>
                <br />
                <strong>Instances: {option.instances}</strong>
                <br />
                <strong>Storage: {option.storage}</strong>
              </p>
            )}
            <a
              href={option.vendorLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-choose"
            >
              Visit Website
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CloudComputing;