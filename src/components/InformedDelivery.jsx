import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const InformedDelivery = () => {
  // Mock data for incoming mail pieces
  const [mailPieces, setMailPieces] = useState([
    { id: 1, type: 'Letter', expectedDelivery: '2023-03-15', image: 'https://via.placeholder.com/150', status: 'In Transit' },
    { id: 2, type: 'Package', expectedDelivery: '2023-03-16', image: 'https://via.placeholder.com/150', status: 'Out for Delivery' },
    { id: 3, type: 'Magazine', expectedDelivery: '2023-03-17', image: 'https://via.placeholder.com/150', status: 'Processing' },
  ]);

  const [deliveredItems, setDeliveredItems] = useState([
    { id: 4, type: 'Letter', deliveredOn: '2023-03-14', image: 'https://via.placeholder.com/150' },
    { id: 5, type: 'Package', deliveredOn: '2023-03-13', image: 'https://via.placeholder.com/150' },
  ]);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Informed Delivery</h1>
      <Tabs defaultValue="incoming">
        <TabsList className="mb-4">
          <TabsTrigger value="incoming">Incoming Mail</TabsTrigger>
          <TabsTrigger value="delivered">Delivered Items</TabsTrigger>
        </TabsList>
        <TabsContent value="incoming">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {mailPieces.map((piece) => (
              <Card key={piece.id}>
                <CardHeader>
                  <CardTitle>{piece.type}</CardTitle>
                </CardHeader>
                <CardContent>
                  <img src={piece.image} alt={piece.type} className="w-full h-40 object-cover mb-2" />
                  <p>Expected Delivery: {piece.expectedDelivery}</p>
                  <p>Status: {piece.status}</p>
                  <Button className="mt-2 w-full">Track Item</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="delivered">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {deliveredItems.map((item) => (
              <Card key={item.id}>
                <CardHeader>
                  <CardTitle>{item.type}</CardTitle>
                </CardHeader>
                <CardContent>
                  <img src={item.image} alt={item.type} className="w-full h-40 object-cover mb-2" />
                  <p>Delivered On: {item.deliveredOn}</p>
                  <Button className="mt-2 w-full">View Details</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default InformedDelivery;
