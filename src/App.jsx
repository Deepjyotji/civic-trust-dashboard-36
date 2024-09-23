import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";
import Signup from "./components/Signup";
import AuthenticatedLayout from "./components/AuthenticatedLayout";
import AdminDashboard from "./components/AdminDashboard";

const queryClient = new QueryClient();

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userRole, setUserRole] = useState(null);

  const handleSignIn = (role) => {
    setIsAuthenticated(true);
    setUserRole(role);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setUserRole(null);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <div className="min-h-screen bg-gray-50 text-gray-900 font-sans">
          <Toaster />
          <BrowserRouter>
            <Routes>
              <Route
                path="/signup"
                element={<Signup onSignIn={handleSignIn} />}
              />
              <Route
                path="/admin/*"
                element={
                  isAuthenticated && userRole === 'admin' ? (
                    <AdminDashboard />
                  ) : (
                    <Navigate to="/signup" replace />
                  )
                }
              />
              <Route
                path="/*"
                element={
                  isAuthenticated ? (
                    <AuthenticatedLayout userRole={userRole} onLogout={handleLogout} />
                  ) : (
                    <Navigate to="/signup" replace />
                  )
                }
              />
            </Routes>
          </BrowserRouter>
        </div>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
