import React from 'react';
import { Routes, Route, Link, Navigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import Index from "../pages/Index";
import Dashboard from "./Dashboard";
import TrackService from "./TrackService";
import DeliveryManager from "./DeliveryManager";
import InformedDelivery from "./InformedDelivery";
import UserDashboard from "./UserDashboard";
import StaffDashboard from "./StaffDashboard";
import { LayoutDashboard, Search, Truck, Mail, LogOut } from "lucide-react";

const AuthenticatedLayout = ({ userRole, onLogout }) => {
  const navItems = [
    { title: "Home", path: "/", icon: <LayoutDashboard className="h-5 w-5" /> },
    { title: "Dashboard", path: "/dashboard", icon: <LayoutDashboard className="h-5 w-5" /> },
    { title: "Track Service", path: "/track", icon: <Search className="h-5 w-5" /> },
  ];

  if (userRole === 'user') {
    navItems.push(
      { title: "Delivery Manager", path: "/delivery-manager", icon: <Truck className="h-5 w-5" /> },
      { title: "Informed Delivery", path: "/informed-delivery", icon: <Mail className="h-5 w-5" /> }
    );
  }

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md">
        <div className="p-4">
          <h1 className="text-2xl font-bold text-blue-600">DoP Monitor</h1>
        </div>
        <nav className="mt-8">
          {navItems.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              className="flex items-center px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
            >
              {item.icon}
              <span className="ml-3">{item.title}</span>
            </Link>
          ))}
        </nav>
        <div className="absolute bottom-0 w-64 p-4">
          <Button
            onClick={onLogout}
            variant="outline"
            className="w-full flex items-center justify-center"
          >
            <LogOut className="h-5 w-5 mr-2" />
            Log Out
          </Button>
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 overflow-y-auto">
        <div className="p-8">
          <Routes>
            <Route path="/" element={<Index userRole={userRole} />} />
            <Route
              path="/dashboard"
              element={
                userRole === 'user' ? (
                  <UserDashboard />
                ) : (userRole === 'deliveryAgent' || userRole === 'postOfficeStaff') ? (
                  <StaffDashboard userRole={userRole} />
                ) : (
                  <Dashboard userRole={userRole} />
                )
              }
            />
            <Route path="/track" element={<TrackService />} />
            {userRole === 'user' && (
              <>
                <Route path="/delivery-manager" element={<DeliveryManager />} />
                <Route path="/informed-delivery" element={<InformedDelivery />} />
              </>
            )}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
      </main>
    </div>
  );
};

export default AuthenticatedLayout;
