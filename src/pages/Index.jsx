import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LayoutDashboard, Search, ClipboardList, Truck, Mail } from "lucide-react";

const Index = ({ userRole }) => {
  const features = [
    { title: "Dashboard", description: "View real-time performance metrics and KPIs.", link: "/dashboard", icon: <LayoutDashboard className="h-6 w-6 mb-2" /> },
    { title: "Track Your Service", description: "Check the status of your postal service.", link: "/track", icon: <Search className="h-6 w-6 mb-2" /> },
  ];

  if (userRole === 'user') {
    features.push(
      { title: "Delivery Manager", description: "Manage your delivery preferences.", link: "/delivery-manager", icon: <Truck className="h-6 w-6 mb-2" /> },
      { title: "Informed Delivery", description: "Preview your incoming mail.", link: "/informed-delivery", icon: <Mail className="h-6 w-6 mb-2" /> }
    );
  } else if (userRole === 'deliveryAgent' || userRole === 'postOfficeStaff') {
    features.push(
      { title: "Data Collection", description: "Input real-time data on service delivery.", link: "/data-collection", icon: <ClipboardList className="h-6 w-6 mb-2" /> }
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-blue-600 text-white p-6">
        <h1 className="text-3xl font-bold">Welcome to DoP Monitor</h1>
        <p className="mt-2">Track and improve Department of Posts services with real-time data</p>
      </header>
      <main className="container mx-auto mt-12 p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="text-center">
                {feature.icon}
                <CardTitle className="text-xl font-semibold">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">{feature.description}</p>
                <Link to={feature.link}>
                  <Button className="w-full bg-blue-500 hover:bg-blue-600">{`Go to ${feature.title}`}</Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Index;
