import React, { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Package, Truck, CheckCircle } from "lucide-react";

const TrackService = () => {
  const [trackingId, setTrackingId] = useState('');
  const [trackingResult, setTrackingResult] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Implement actual tracking logic
    // For now, we'll use mock data
    setTrackingResult({
      id: trackingId,
      status: 'In Transit',
      lastUpdate: '2023-03-17 14:30',
      estimatedDelivery: '2023-03-19',
      timeline: [
        { date: '2023-03-15 09:00', status: 'Package Received', location: 'Delhi Sorting Center' },
        { date: '2023-03-16 10:15', status: 'In Transit', location: 'Mumbai Distribution Center' },
        { date: '2023-03-17 14:30', status: 'Out for Delivery', location: 'Local Post Office' },
      ]
    });
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'Package Received':
        return <Package className="h-6 w-6 text-blue-500" />;
      case 'In Transit':
        return <Truck className="h-6 w-6 text-yellow-500" />;
      case 'Out for Delivery':
        return <Truck className="h-6 w-6 text-green-500" />;
      case 'Delivered':
        return <CheckCircle className="h-6 w-6 text-green-500" />;
      default:
        return <Package className="h-6 w-6 text-gray-500" />;
    }
  };

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold text-gray-800">Track Your Service</h1>
      <Card>
        <CardHeader>
          <CardTitle>Enter Tracking ID</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="flex space-x-2">
            <Input
              type="text"
              value={trackingId}
              onChange={(e) => setTrackingId(e.target.value)}
              placeholder="Enter your tracking ID"
              className="flex-grow"
            />
            <Button type="submit">Track</Button>
          </form>
        </CardContent>
      </Card>

      {trackingResult && (
        <Card>
          <CardHeader>
            <CardTitle>Tracking Result for {trackingResult.id}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <p className="font-semibold">Current Status: {trackingResult.status}</p>
                <p>Last Updated: {trackingResult.lastUpdate}</p>
                <p>Estimated Delivery: {trackingResult.estimatedDelivery}</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Tracking Timeline</h3>
                <div className="space-y-4">
                  {trackingResult.timeline.map((event, index) => (
                    <div key={index} className="flex items-start">
                      {getStatusIcon(event.status)}
                      <div className="ml-4">
                        <p className="font-semibold">{event.status}</p>
                        <p className="text-sm text-gray-600">{event.date}</p>
                        <p className="text-sm text-gray-600">{event.location}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default TrackService;
