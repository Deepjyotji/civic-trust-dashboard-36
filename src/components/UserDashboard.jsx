import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { TrendingUp, TrendingDown, AlertCircle, Package, Truck } from "lucide-react";

const UserDashboard = () => {
  // Mock data - in a real application, this would come from an API
  const metrics = [
    { title: "Average Delivery Time", value: 2.5, target: 2, unit: "days", trend: "down" },
    { title: "Service Satisfaction", value: 4.2, target: 4.5, unit: "/5", trend: "up" },
    { title: "On-Time Delivery Rate", value: 92, target: 95, unit: "%", trend: "up" },
  ];

  const recentServices = [
    { id: "PKG001", type: "Package", status: "In Transit", eta: "2023-03-18" },
    { id: "LTR002", type: "Letter", status: "Delivered", deliveredOn: "2023-03-15" },
  ];

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold text-gray-800">User Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {metrics.map((metric, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg font-medium text-gray-700">{metric.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between items-center mb-2">
                <span className="text-3xl font-bold text-blue-600">{metric.value}{metric.unit}</span>
                {metric.trend === "up" ? (
                  <TrendingUp className="h-6 w-6 text-green-500" />
                ) : (
                  <TrendingDown className="h-6 w-6 text-red-500" />
                )}
              </div>
              <Progress value={(metric.value / metric.target) * 100} className="h-2 mb-2" />
              <div className="flex justify-between items-center text-sm text-gray-600">
                <span>Target: {metric.target}{metric.unit}</span>
                {metric.value < metric.target && (
                  <div className="flex items-center text-yellow-500">
                    <AlertCircle className="h-4 w-4 mr-1" />
                    <span>Below target</span>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Recent Services</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="divide-y">
            {recentServices.map((service) => (
              <div key={service.id} className="py-4 flex justify-between items-center">
                <div className="flex items-center">
                  {service.type === "Package" ? (
                    <Package className="h-6 w-6 mr-2 text-blue-500" />
                  ) : (
                    <Truck className="h-6 w-6 mr-2 text-green-500" />
                  )}
                  <div>
                    <p className="font-semibold">{service.type} - {service.id}</p>
                    <p className="text-sm text-gray-600">{service.status}</p>
                    <p className="text-sm text-gray-600">
                      {service.eta ? `ETA: ${service.eta}` : `Delivered: ${service.deliveredOn}`}
                    </p>
                  </div>
                </div>
                <Button variant="outline">Track</Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default UserDashboard;
