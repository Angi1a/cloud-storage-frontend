import React from 'react';
import './CloudNetworking.css';

const CloudNetworking = () => {
  const networkingOptions = [
    {
      id: 1,
      title: 'Virtual Private Cloud (VPC)',
      description: 'Create a logically isolated virtual network for your resources.',
      pricePerHour: 0.10,
      bandwidth: '1Gbps',
    },
    {
      id: 2,
      title: 'Load Balancing',
      description: 'Distribute traffic across multiple instances for high availability.',
      pricePerHour: 0.025,
      maxConnections: '5 million',
    },
    {
      id: 3,
      title: 'Content Delivery Network (CDN)',
      description: 'Deliver content faster and more efficiently to your global users.',
      pricePerGB: 0.085,
      edgeLocations: '200+',
    },
  ];

  return (
    <div>
      <h2>Cloud Networking</h2>
      <p>Robust and scalable networking solutions for your applications.</p>

      <div className="networking-options">
        {networkingOptions.map((option) => (
          <div key={option.id} className="networking-option">
            <h3>{option.title}</h3>
            <p>{option.description}</p>
            {option.title === 'Virtual Private Cloud (VPC)' && (
              <p>
                <strong>Price: ${option.pricePerHour}/hour</strong>
                <br />
                <strong>Bandwidth: {option.bandwidth}</strong>
              </p>
            )}
            {option.title === 'Load Balancing' && (
              <p>
                <strong>Price: ${option.pricePerHour}/hour</strong>
                <br />
                <strong>Max Connections: {option.maxConnections}</strong>
              </p>
            )}
            {option.title === 'Content Delivery Network (CDN)' && (
              <p>
                <strong>Price: ${option.pricePerGB}/GB</strong>
                <br />
                <strong>Edge Locations: {option.edgeLocations}</strong>
              </p>
            )}
            <button className="btn-choose">Choose Plan</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CloudNetworking;