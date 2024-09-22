import React, { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "sonner";

const DeliveryManager = () => {
  const [deliveryPreference, setDeliveryPreference] = useState('');
  const [address, setAddress] = useState('');
  const [specialInstructions, setSpecialInstructions] = useState('');
  const [notifications, setNotifications] = useState({
    email: true,
    sms: false,
    app: true
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Implement actual delivery preference update logic
    console.log('Delivery preference:', deliveryPreference);
    console.log('Address:', address);
    console.log('Special Instructions:', specialInstructions);
    console.log('Notifications:', notifications);
    toast.success("Delivery preferences updated successfully");
  };

  const handleNotificationChange = (type) => {
    setNotifications(prev => ({ ...prev, [type]: !prev[type] }));
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
                  <SelectItem value="safePlace">Leave in Safe Place</SelectItem>
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
            <div>
              <label htmlFor="specialInstructions" className="block text-sm font-medium text-gray-700">Special Instructions</label>
              <Input
                type="text"
                id="specialInstructions"
                value={specialInstructions}
                onChange={(e) => setSpecialInstructions(e.target.value)}
                placeholder="E.g., Leave with neighbor, Ring doorbell, etc."
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Notification Preferences</label>
              <div className="space-y-2">
                <div className="flex items-center">
                  <Checkbox 
                    id="emailNotif" 
                    checked={notifications.email}
                    onCheckedChange={() => handleNotificationChange('email')}
                  />
                  <label htmlFor="emailNotif" className="ml-2">Email Notifications</label>
                </div>
                <div className="flex items-center">
                  <Checkbox 
                    id="smsNotif" 
                    checked={notifications.sms}
                    onCheckedChange={() => handleNotificationChange('sms')}
                  />
                  <label htmlFor="smsNotif" className="ml-2">SMS Notifications</label>
                </div>
                <div className="flex items-center">
                  <Checkbox 
                    id="appNotif" 
                    checked={notifications.app}
                    onCheckedChange={() => handleNotificationChange('app')}
                  />
                  <label htmlFor="appNotif" className="ml-2">App Notifications</label>
                </div>
              </div>
            </div>
            <Button type="submit">Update Preferences</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default DeliveryManager;
