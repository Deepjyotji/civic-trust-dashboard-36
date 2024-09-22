import React, { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const TrackService = () => {
  const [trackingId, setTrackingId] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Implement tracking logic
    console.log('Tracking ID submitted:', trackingId);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Track Your Service</h1>
      <form onSubmit={handleSubmit} className="max-w-sm">
        <Input
          type="text"
          value={trackingId}
          onChange={(e) => setTrackingId(e.target.value)}
          placeholder="Enter your tracking ID"
          className="mb-2"
        />
        <Button type="submit">Track</Button>
      </form>
    </div>
  );
};

export default TrackService;