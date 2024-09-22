import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { TrendingUp, TrendingDown, AlertCircle, BarChart, PieChart, MapPin } from "lucide-react";

const AdminDashboard = () => {
  // Mock data - in a real application, this would come from an API
  const overallMetrics = [
    { title: "Overall Delivery Efficiency", value: 92, target: 95, unit: "%", trend: "up" },
    { title: "Customer Satisfaction", value: 4.3, target: 4.5, unit: "/5", trend: "up" },
    { title: "Complaint Resolution Rate", value: 85, target: 90, unit: "%", trend: "down" },
  ];

  const regionalPerformance = [
    { region: "North", efficiency: 94, satisfaction: 4.4 },
    { region: "South", efficiency: 91, satisfaction: 4.2 },
    { region: "East", efficiency: 89, satisfaction: 4.1 },
    { region: "West", efficiency: 93, satisfaction: 4.3 },
  ];

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-8 text-gray-800">Admin Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {overallMetrics.map((metric, index) => (
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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <BarChart className="h-6 w-6 mr-2" />
              Regional Performance
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {regionalPerformance.map((region) => (
                <div key={region.region} className="flex items-center justify-between">
                  <div className="flex items-center">
                    <MapPin className="h-5 w-5 mr-2 text-blue-500" />
                    <span className="font-medium">{region.region}</span>
                  </div>
                  <div className="flex space-x-4">
                    <div>
                      <span className="text-sm text-gray-600">Efficiency:</span>
                      <span className="ml-1 font-semibold">{region.efficiency}%</span>
                    </div>
                    <div>
                      <span className="text-sm text-gray-600">Satisfaction:</span>
                      <span className="ml-1 font-semibold">{region.satisfaction}/5</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <PieChart className="h-6 w-6 mr-2" />
              Performance Insights
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">Based on the current data, here are some insights:</p>
            <ul className="list-disc list-inside space-y-2">
              <li>The Western region is performing above average in both efficiency and satisfaction.</li>
              <li>The Eastern region needs improvement in delivery efficiency.</li>
              <li>Overall customer satisfaction is trending positively but still below target.</li>
              <li>Complaint resolution rate has decreased and requires immediate attention.</li>
            </ul>
            <Button className="mt-4 w-full">Generate Detailed Report</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminDashboard;