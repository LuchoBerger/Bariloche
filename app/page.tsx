// pages/landing.tsx
import React from 'react';

const LandingPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm w-full">
        <div className="container mx-auto px-4 py-4">
          <h1 className="text-xl font-bold text-center text-sky-800">Welcome to My Next.js App</h1>
        </div>
      </header>

      <main className="flex-grow container mx-auto px-4 py-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-sky-800">Landing Page</h2>
        <p className="mt-4 text-gray-600">This is a simple landing page for our Next.js app.</p>
        <button className="mt-8 px-4 py-2 bg-sky-600 text-white rounded hover:bg-sky-700">
          Get Started
        </button>
      </main>

      <footer className="bg-gray-100 text-gray-600 py-4 w-full">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 My Next.js App. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;