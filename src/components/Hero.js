import React from 'react';

function Hero() {
  return (
    <section className="bg-gray-900 text-white py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">Welcome to the Future of Web3</h2>
        <p className="text-xl mb-8">Empowering decentralized applications and blockchain technology</p>
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Get Started
        </button>
      </div>
    </section>
  );
}

export default Hero;
