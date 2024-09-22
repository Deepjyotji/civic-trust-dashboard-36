import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Dashboard = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Performance Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Delivery Timelines</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Average: 2.3 days</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Customer Wait Times</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Average: 15 minutes</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Complaint Resolution Rate</CardTitle>
          </CardHeader>
          <CardContent>
            <p>85% resolved within 48 hours</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;