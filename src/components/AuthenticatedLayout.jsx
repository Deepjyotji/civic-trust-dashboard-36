import React, { useState } from 'react';
import { Routes, Route, Link, Navigate, useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import Index from "../pages/Index";
import Dashboard from "./Dashboard";
import TrackService from "./TrackService";
import DeliveryManager from "./DeliveryManager";
import InformedDelivery from "./InformedDelivery";
import UserDashboard from "./UserDashboard";
import StaffDashboard from "./StaffDashboard";
import DataCollection from "./DataCollection";
import { LayoutDashboard, Search, Truck, Mail, ClipboardList, LogOut, Menu, X } from "lucide-react";

const AuthenticatedLayout = ({ userRole, onLogout }) => {
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

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
  } else if (userRole === 'deliveryAgent' || userRole === 'postOfficeStaff') {
    navItems.push(
      { title: "Data Collection", path: "/data-collection", icon: <ClipboardList className="h-5 w-5" /> }
    );
  }

  const handleLogout = () => {
    onLogout();
    navigate('/signup');
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className={`bg-indigo-700 text-white transition-all duration-300 ${isSidebarOpen ? 'w-64' : 'w-0'} overflow-hidden`}>
        <div className="p-4">
          <h1 className="text-2xl font-bold">DoP Monitor</h1>
        </div>
        <nav className="mt-8">
          {navItems.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              className="flex items-center px-4 py-3 text-gray-300 hover:bg-indigo-600 hover:text-white transition-colors"
            >
              {item.icon}
              <span className="ml-3">{item.title}</span>
            </Link>
          ))}
        </nav>
        <div className="absolute bottom-0 w-64 p-4">
          <Button
            onClick={handleLogout}
            variant="outline"
            className="w-full flex items-center justify-center text-white border-white hover:bg-indigo-600"
          >
            <LogOut className="h-5 w-5 mr-2" />
            Log Out
          </Button>
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 overflow-y-auto">
        <div className="p-4 flex items-center bg-white shadow-sm">
          <Button onClick={toggleSidebar} variant="ghost" className="mr-4">
            {isSidebarOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
          <h1 className="text-2xl font-bold text-indigo-700">DoP Monitor Dashboard</h1>
        </div>
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
            {(userRole === 'deliveryAgent' || userRole === 'postOfficeStaff') && (
              <Route path="/data-collection" element={<DataCollection userRole={userRole} />} />
            )}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
      </main>
    </div>
  );
};

export default AuthenticatedLayout;
