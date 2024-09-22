import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { AlertCircle } from "lucide-react";

const Dashboard = () => {
  // Mock data - in a real application, this would come from an API
  const metrics = [
    { title: "Delivery Timelines", value: 92, target: 95, unit: "%" },
    { title: "Customer Satisfaction", value: 4.2, target: 4.5, unit: "/5" },
    { title: "Complaint Resolution Rate", value: 85, target: 90, unit: "%" },
    { title: "Online Service Uptime", value: 99.5, target: 99.9, unit: "%" },
  ];

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Citizens' Charter Performance Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {metrics.map((metric, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle className="text-sm font-medium">{metric.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{metric.value}{metric.unit}</div>
              <Progress value={(metric.value / metric.target) * 100} className="mt-2" />
              <p className="text-xs text-muted-foreground mt-2">
                Target: {metric.target}{metric.unit}
              </p>
              {metric.value < metric.target && (
                <div className="flex items-center mt-2 text-yellow-500">
                  <AlertCircle className="h-4 w-4 mr-1" />
                  <span className="text-xs">Below target</span>
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
