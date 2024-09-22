import React, { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const DataCollection = ({ userRole }) => {
  const [formData, setFormData] = useState({
    serviceType: '',
    deliveryTime: '',
    customerSatisfaction: '',
    waitTime: '',
    complaintResolution: '',
    comments: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSelectChange = (value) => {
    setFormData(prevState => ({
      ...prevState,
      serviceType: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Implement actual data submission to backend
    console.log('Submitted data:', formData);
    toast.success("Data submitted successfully");
    // Reset form after submission
    setFormData({
      serviceType: '',
      deliveryTime: '',
      customerSatisfaction: '',
      waitTime: '',
      complaintResolution: '',
      comments: ''
    });
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Data Collection Form</h1>
      <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
        <div>
          <label htmlFor="serviceType" className="block text-sm font-medium text-gray-700">Service Type</label>
          <Select onValueChange={handleSelectChange} value={formData.serviceType}>
            <SelectTrigger>
              <SelectValue placeholder="Select service type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="mail">Mail Delivery</SelectItem>
              <SelectItem value="parcel">Parcel Service</SelectItem>
              <SelectItem value="moneyOrder">Money Order</SelectItem>
              <SelectItem value="onlineService">Online Service</SelectItem>
            </SelectContent>
          </Select>
        </div>
        {userRole === 'deliveryAgent' && (
          <div>
            <label htmlFor="deliveryTime" className="block text-sm font-medium text-gray-700">Delivery Time (in minutes)</label>
            <Input
              type="number"
              id="deliveryTime"
              name="deliveryTime"
              value={formData.deliveryTime}
              onChange={handleInputChange}
              placeholder="Enter delivery time"
            />
          </div>
        )}
        {userRole === 'postOfficeStaff' && (
          <>
            <div>
              <label htmlFor="waitTime" className="block text-sm font-medium text-gray-700">Customer Wait Time (in minutes)</label>
              <Input
                type="number"
                id="waitTime"
                name="waitTime"
                value={formData.waitTime}
                onChange={handleInputChange}
                placeholder="Enter wait time"
              />
            </div>
            <div>
              <label htmlFor="complaintResolution" className="block text-sm font-medium text-gray-700">Complaint Resolution Time (in minutes)</label>
              <Input
                type="number"
                id="complaintResolution"
                name="complaintResolution"
                value={formData.complaintResolution}
                onChange={handleInputChange}
                placeholder="Enter resolution time"
              />
            </div>
          </>
        )}
        <div>
          <label htmlFor="customerSatisfaction" className="block text-sm font-medium text-gray-700">Customer Satisfaction (1-5)</label>
          <Input
            type="number"
            id="customerSatisfaction"
            name="customerSatisfaction"
            value={formData.customerSatisfaction}
            onChange={handleInputChange}
            placeholder="Enter satisfaction score"
            min="1"
            max="5"
          />
        </div>
        <div>
          <label htmlFor="comments" className="block text-sm font-medium text-gray-700">Additional Comments</label>
          <Textarea
            id="comments"
            name="comments"
            value={formData.comments}
            onChange={handleInputChange}
            placeholder="Enter any additional comments"
            rows={3}
          />
        </div>
        <Button type="submit">Submit Data</Button>
      </form>
    </div>
  );
};

export default DataCollection;
