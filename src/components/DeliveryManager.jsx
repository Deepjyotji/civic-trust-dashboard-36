import React, { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";

const DeliveryManager = () => {
  const [deliveryPreference, setDeliveryPreference] = useState('');
  const [address, setAddress] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Implement actual delivery preference update logic
    console.log('Delivery preference:', deliveryPreference);
    console.log('Address:', address);
    toast.success("Delivery preferences updated successfully");
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Delivery Manager</h1>
      <Card>
        <CardHeader>
          <CardTitle>Set Your Delivery Preferences</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="deliveryPreference" className="block text-sm font-medium text-gray-700">Delivery Preference</label>
              <Select onValueChange={setDeliveryPreference} value={deliveryPreference}>
                <SelectTrigger>
                  <SelectValue placeholder="Select delivery preference" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="standard">Standard Delivery</SelectItem>
                  <SelectItem value="express">Express Delivery</SelectItem>
                  <SelectItem value="holdAtPostOffice">Hold at Post Office</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <label htmlFor="address" className="block text-sm font-medium text-gray-700">Delivery Address</label>
              <Input
                type="text"
                id="address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder="Enter your delivery address"
              />
            </div>
            <Button type="submit">Update Preferences</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default DeliveryManager;