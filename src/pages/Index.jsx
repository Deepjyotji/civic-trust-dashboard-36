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
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-indigo-100">
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-indigo-700">Welcome to DoP Monitor</h1>
          <p className="mt-2 text-gray-600">Track and improve Department of Posts services with real-time data</p>
        </div>
      </header>
      <main className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <CardHeader className="text-center bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-t-lg">
                <div className="inline-block p-3 bg-white rounded-full mb-2">
                  {React.cloneElement(feature.icon, { className: "h-8 w-8 text-indigo-500" })}
                </div>
                <CardTitle className="text-xl font-semibold">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 mb-4">{feature.description}</p>
                <Link to={feature.link}>
                  <Button className="w-full bg-indigo-500 hover:bg-indigo-600 transition-colors">
                    {`Go to ${feature.title}`}
                  </Button>
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
