import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { TrendingUp, TrendingDown, AlertCircle, BarChart, PieChart, MapPin, Users, FileText, Bell } from "lucide-react";

const AdminDashboard = () => {
  const [selectedRegion, setSelectedRegion] = useState('All');

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

  const renderMetricCard = (metric, index) => (
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
  );

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-8 text-gray-800">Admin Dashboard</h1>
      
      <Tabs defaultValue="overview">
        <TabsList className="mb-4">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
          <TabsTrigger value="management">Management</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
        </TabsList>

        <TabsContent value="overview">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {overallMetrics.map(renderMetricCard)}
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <MapPin className="h-6 w-6 mr-2" />
                Regional Performance
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Select onValueChange={setSelectedRegion} defaultValue={selectedRegion}>
                <SelectTrigger className="w-[180px] mb-4">
                  <SelectValue placeholder="Select region" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="All">All Regions</SelectItem>
                  <SelectItem value="North">North</SelectItem>
                  <SelectItem value="South">South</SelectItem>
                  <SelectItem value="East">East</SelectItem>
                  <SelectItem value="West">West</SelectItem>
                </SelectContent>
              </Select>
              <div className="space-y-4">
                {regionalPerformance
                  .filter(region => selectedRegion === 'All' || region.region === selectedRegion)
                  .map((region) => (
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
        </TabsContent>

        <TabsContent value="analytics">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <BarChart className="h-6 w-6 mr-2" />
                Data Analytics & Reporting
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">Generate custom reports and analyze trends:</p>
              <div className="space-y-4">
                <Button className="mr-2">Generate Custom Report</Button>
                <Button variant="outline">Export Data</Button>
              </div>
              <div className="mt-4">
                <p className="font-semibold">Predictive Analytics:</p>
                <p>Based on current trends, we predict a 5% increase in delivery efficiency next month.</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="management">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Users className="h-6 w-6 mr-2" />
                User & Role Management
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Button className="mr-2 mb-4">Manage Staff Accounts</Button>
              <Button variant="outline" className="mb-4">View Citizen Queries</Button>
              <div>
                <h3 className="font-semibold mb-2">Recent Staff Activities:</h3>
                <ul className="list-disc list-inside">
                  <li>John Doe updated delivery status for order #12345</li>
                  <li>Jane Smith resolved complaint #67890</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="notifications">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Bell className="h-6 w-6 mr-2" />
                Notifications & Alerts
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <label htmlFor="alertThreshold" className="block text-sm font-medium text-gray-700 mb-1">
                    Set Alert Threshold for Delivery Delays (in hours):
                  </label>
                  <Input id="alertThreshold" type="number" placeholder="e.g., 24" className="w-full max-w-xs" />
                </div>
                <Button>Update Alert Settings</Button>
              </div>
              <div className="mt-4">
                <h3 className="font-semibold mb-2">Recent Alerts:</h3>
                <ul className="list-disc list-inside">
                  <li>Delivery efficiency in East region dropped below 90%</li>
                  <li>High volume of customer complaints in North region</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AdminDashboard;
