import React from 'react';
import Header from '../components/Header';

const Home: React.FC = () => {
  return (
    <div>
      <Header />
      <main className="p-4">
        <h2 className="text-2xl font-bold">Welcome to My Portfolio</h2>
        <p>This is where you can showcase your projects and skills.</p>
      </main>
    </div>
  );
}

export default Home;
