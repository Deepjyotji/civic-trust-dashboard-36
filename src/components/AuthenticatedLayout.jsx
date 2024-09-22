import React from 'react';
import { Routes, Route, Link, Navigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import Index from "../pages/Index";
import Dashboard from "./Dashboard";
import TrackService from "./TrackService";
import DataCollection from "./DataCollection";
import DeliveryManager from "./DeliveryManager";
import InformedDelivery from "./InformedDelivery";

const AuthenticatedLayout = ({ userRole }) => {
  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <span className="text-xl font-bold text-gray-800">DoP Monitor</span>
              </div>
              <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                <Link to="/" className="text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-gray-300 text-sm font-medium">
                  Home
                </Link>
                <Link to="/dashboard" className="text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-gray-300 text-sm font-medium">
                  Dashboard
                </Link>
                <Link to="/track" className="text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-gray-300 text-sm font-medium">
                  Track Service
                </Link>
                {userRole === 'user' && (
                  <Link to="/delivery-manager" className="text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-gray-300 text-sm font-medium">
                    Delivery Manager
                  </Link>
                )}
                {userRole === 'user' && (
                  <Link to="/informed-delivery" className="text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-gray-300 text-sm font-medium">
                    Informed Delivery
                  </Link>
                )}
                {(userRole === 'deliveryAgent' || userRole === 'postOfficeStaff') && (
                  <Link to="/data-collection" className="text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-gray-300 text-sm font-medium">
                    Data Collection
                  </Link>
                )}
              </div>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:items-center">
              <Button variant="outline">Sign Out</Button>
            </div>
          </div>
        </div>
      </nav>

      <div className="py-10">
        <main>
          <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <Routes>
              <Route path="/" element={<Index userRole={userRole} />} />
              <Route path="/dashboard" element={<Dashboard userRole={userRole} />} />
              <Route path="/track" element={<TrackService />} />
              {userRole === 'user' && (
                <>
                  <Route path="/delivery-manager" element={<DeliveryManager />} />
                  <Route path="/informed-delivery" element={<InformedDelivery />} />
                </>
              )}
              {(userRole === 'deliveryAgent' || userRole === 'postOfficeStaff') && (
                <Route path="/data-collection" element={<DataCollection userRole={userRole} />} />
              )}
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AuthenticatedLayout;
