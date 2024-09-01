import React from 'react';
import { FaLock, FaRocket, FaUsers } from 'react-icons/fa';

function Features() {
  const features = [
    { icon: <FaLock />, title: 'Secure', description: 'Built with cutting-edge blockchain technology' },
    { icon: <FaRocket />, title: 'Fast', description: 'Lightning-fast transactions and scalability' },
    { icon: <FaUsers />, title: 'Decentralized', description: 'Powered by a global network of users' },
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Our Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl mb-4 text-blue-600">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
