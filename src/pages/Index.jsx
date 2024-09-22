import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-blue-600 text-white p-4">
        <h1 className="text-2xl font-bold">Department of Posts - Citizens' Charter Monitor</h1>
      </header>
      <main className="container mx-auto mt-8 p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Dashboard</h2>
            <p className="mb-4">View real-time performance metrics and KPIs for DoP offices.</p>
            <Link to="/dashboard">
              <Button>Go to Dashboard</Button>
            </Link>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Track Your Service</h2>
            <p className="mb-4">Enter your tracking ID to check the status of your postal service.</p>
            <Link to="/track">
              <Button>Track Service</Button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
