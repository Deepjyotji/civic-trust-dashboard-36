import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LayoutDashboard, Search, ClipboardList, UserPlus } from "lucide-react";

const Index = () => {
  const features = [
    { title: "Dashboard", description: "View real-time performance metrics and KPIs for DoP offices.", link: "/dashboard", icon: <LayoutDashboard className="h-6 w-6 mb-2" /> },
    { title: "Track Your Service", description: "Enter your tracking ID to check the status of your postal service.", link: "/track", icon: <Search className="h-6 w-6 mb-2" /> },
    { title: "Data Collection", description: "For staff: Input real-time data on service delivery and customer satisfaction.", link: "/data-collection", icon: <ClipboardList className="h-6 w-6 mb-2" /> },
    { title: "Sign Up", description: "Create an account to access personalized features and updates.", link: "/signup", icon: <UserPlus className="h-6 w-6 mb-2" /> },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-blue-600 text-white p-6">
        <h1 className="text-3xl font-bold">Department of Posts - Citizens' Charter Monitor</h1>
      </header>
      <main className="container mx-auto mt-12 p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="text-center">
                {feature.icon}
                <CardTitle className="text-xl font-semibold">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">{feature.description}</p>
                <Link to={feature.link}>
                  <Button className="w-full">{`Go to ${feature.title}`}</Button>
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
