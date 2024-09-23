import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { AlertCircle, TrendingUp, TrendingDown } from "lucide-react";

const Dashboard = ({ userRole }) => {
  const metrics = [
    { title: "Delivery Timelines", value: 92, target: 95, unit: "%", trend: "up" },
    { title: "Customer Satisfaction", value: 4.2, target: 4.5, unit: "/5", trend: "down" },
    { title: "Complaint Resolution Rate", value: 85, target: 90, unit: "%", trend: "up" },
    { title: "Online Service Uptime", value: 99.5, target: 99.9, unit: "%", trend: "up" },
  ];

  const deliveryAgentMetrics = [
    { title: "Deliveries Completed", value: 45, target: 50, unit: "", trend: "up" },
    { title: "On-Time Delivery Rate", value: 95, target: 98, unit: "%", trend: "up" },
  ];

  const postOfficeStaffMetrics = [
    { title: "Packages Processed", value: 120, target: 150, unit: "", trend: "up" },
    { title: "Counter Service Time", value: 5.2, target: 5, unit: "min", trend: "down" },
  ];

  const renderMetrics = (metricsData) => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {metricsData.map((metric, index) => (
        <Card key={index} className="hover:shadow-lg transition-shadow duration-300 bg-white">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-medium text-gray-700">{metric.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between items-center mb-2">
              <span className="text-3xl font-bold text-indigo-600">{metric.value}{metric.unit}</span>
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
  );

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold text-indigo-700">Dashboard</h1>
      {userRole === 'deliveryAgent' && renderMetrics(deliveryAgentMetrics)}
      {userRole === 'postOfficeStaff' && renderMetrics(postOfficeStaffMetrics)}
      {(userRole !== 'deliveryAgent' && userRole !== 'postOfficeStaff') && renderMetrics(metrics)}
    </div>
  );
};

export default Dashboard;
