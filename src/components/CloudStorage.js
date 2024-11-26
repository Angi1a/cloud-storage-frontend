import React from 'react';
import './CloudStorage.css';

const CloudStorage = () => {
  const storagePlans = [
    {
      id: 1,
      vendor: 'Amazon',
      title: 'Amazon S3 Standard',
      description: 'Secure, durable, and highly-scalable object storage for all your data storage needs.',
      pricePerMonth: 0.023, // Price per GB/month
      storage: 'Pay as you go',
      vendorLink: 'https://aws.amazon.com/s3/',
    },
    {
      id: 2,
      vendor: 'Alibaba Cloud',
      title: 'Alibaba Cloud OSS Standard',
      description: 'Reliable, cost-effective, and massively scalable object storage service.',
      pricePerMonth: 0.0245, 
      storage: 'Pay as you go',
      vendorLink: 'https://www.alibabacloud.com/product/oss',
    },
    {
      id: 3,
      vendor: 'Dell EMC',
      title: 'Dell EMC ECS',
      description: 'Scalable and cost-effective object storage for private and hybrid cloud environments.',
      pricePerMonth: 19.99, 
      storage: '1TB',
      vendorLink: 'https://www.dellemc.com/en-us/storage/ecs/ecs-object-storage.htm',
    },
    {
      id: 4,
      vendor: 'Huawei',
      title: 'Huawei Cloud OBS',
      description: 'Secure, reliable, and cost-effective object storage service.',
      pricePerMonth: 0.0264, 
      storage: 'Pay as you go',
      vendorLink: 'https://www.huaweicloud.com/en-us/product/obs.html',
    },
    {
      id: 5,
      vendor: 'Microsoft',
      title: 'Microsoft Azure Blob Storage',
      description: 'Massively scalable and secure object storage for cloud-native workloads.',
      pricePerMonth: 0.0208,  
      vendorLink: 'https://azure.microsoft.com/en-us/services/storage/blobs/',
    },
  ];

  return (
    <div>
      <h2>Cloud Storage</h2>
      <p>Secure and reliable storage solutions from various vendors.</p>
      <div className="storage-options">
        {storagePlans.map((plan) => (
          <div key={plan.id} className="storage-option">
            <h3>{plan.vendor}</h3>
            <h4>{plan.title}</h4>
            <p>{plan.description}</p>
            <p>
              <strong>
                Price:{' '}
                {plan.storage === 'Pay as you go'
                  ? `$${plan.pricePerMonth}/GB/month`
                  : `$${plan.pricePerMonth}/month`}
              </strong>
            </p>
            <p>
              <strong>Storage: {plan.storage}</strong>
            </p>
            <a href={plan.vendorLink} target="_blank" rel="noopener noreferrer" className="btn-choose">
              Visit Website
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CloudStorage;