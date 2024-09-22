import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const InformedDelivery = () => {
  // Mock data for incoming mail pieces
  const [mailPieces, setMailPieces] = useState([
    { id: 1, type: 'Letter', expectedDelivery: '2023-03-15', image: 'https://via.placeholder.com/150' },
    { id: 2, type: 'Package', expectedDelivery: '2023-03-16', image: 'https://via.placeholder.com/150' },
    { id: 3, type: 'Magazine', expectedDelivery: '2023-03-17', image: 'https://via.placeholder.com/150' },
  ]);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Informed Delivery</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {mailPieces.map((piece) => (
          <Card key={piece.id}>
            <CardHeader>
              <CardTitle>{piece.type}</CardTitle>
            </CardHeader>
            <CardContent>
              <img src={piece.image} alt={piece.type} className="w-full h-40 object-cover mb-2" />
              <p>Expected Delivery: {piece.expectedDelivery}</p>
              <Button className="mt-2">Track Item</Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default InformedDelivery;