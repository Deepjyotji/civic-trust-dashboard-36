import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { TrendingUp, TrendingDown, AlertCircle, Package, Truck, Clock } from "lucide-react";

const StaffDashboard = ({ userRole }) => {
  const metrics = userRole === 'deliveryAgent'
    ? [
        { title: "Deliveries Completed", value: 45, target: 50, unit: "", trend: "up" },
        { title: "On-Time Delivery Rate", value: 95, target: 98, unit: "%", trend: "up" },
        { title: "Customer Satisfaction", value: 4.2, target: 4.5, unit: "/5", trend: "up" },
      ]
    : [
        { title: "Packages Processed", value: 120, target: 150, unit: "", trend: "up" },
        { title: "Average Processing Time", value: 5.2, target: 5, unit: "min", trend: "down" },
        { title: "Customer Satisfaction", value: 4.2, target: 4.5, unit: "/5", trend: "up" },
      ];

  const tasks = [
    { id: 1, title: userRole === 'deliveryAgent' ? "Complete deliveries" : "Process incoming packages", priority: "High", dueTime: "10:00 AM" },
    { id: 2, title: "Update delivery statuses", priority: "Medium", dueTime: "12:00 PM" },
    { id: 3, title: "Resolve customer inquiries", priority: "Low", dueTime: "3:00 PM" },
  ];

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold text-gray-800">
        {userRole === 'deliveryAgent' ? 'Delivery Agent Dashboard' : 'Post Office Staff Dashboard'}
      </h1>
      
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
          <CardTitle>Today's Tasks</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="divide-y">
            {tasks.map((task) => (
              <div key={task.id} className="py-4 flex justify-between items-center">
                <div className="flex items-center">
                  {task.title.includes("deliveries") || task.title.includes("packages") ? (
                    <Package className="h-6 w-6 mr-2 text-blue-500" />
                  ) : task.title.includes("delivery") ? (
                    <Truck className="h-6 w-6 mr-2 text-green-500" />
                  ) : (
                    <Clock className="h-6 w-6 mr-2 text-yellow-500" />
                  )}
                  <div>
                    <p className="font-semibold">{task.title}</p>
                    <p className="text-sm text-gray-600">Priority: {task.priority}</p>
                    <p className="text-sm text-gray-600">Due: {task.dueTime}</p>
                  </div>
                </div>
                <Button variant="outline">Complete</Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default StaffDashboard;
