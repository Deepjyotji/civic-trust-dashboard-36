import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";
import Signup from "./components/Signup";
import AuthenticatedLayout from "./components/AuthenticatedLayout";

const queryClient = new QueryClient();

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userRole, setUserRole] = useState(null);

  const handleSignIn = (role) => {
    setIsAuthenticated(true);
    setUserRole(role);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <BrowserRouter>
          <Routes>
            <Route
              path="/signup"
              element={<Signup onSignIn={handleSignIn} />}
            />
            <Route
              path="/*"
              element={
                isAuthenticated ? (
                  <AuthenticatedLayout userRole={userRole} />
                ) : (
                  <Navigate to="/signup" replace />
                )
              }
            />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
