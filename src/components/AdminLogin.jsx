import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";

const AdminLogin = ({ onLogin }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    role: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleRoleChange = (value) => {
    setFormData(prevState => ({
      ...prevState,
      role: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.role) {
      toast.error("Please select an admin role");
      return;
    }
    // TODO: Implement actual login logic with MFA
    console.log('Login data:', formData);
    toast.success("Admin login successful");
    onLogin(formData.role);
    navigate('/admin/dashboard');
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">Admin Login</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Email"
                required
                className="w-full px-3 py-2 border rounded-md"
              />
            </div>
            <div>
              <Input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                placeholder="Password"
                required
                className="w-full px-3 py-2 border rounded-md"
              />
            </div>
            <div>
              <Select onValueChange={handleRoleChange} value={formData.role}>
                <SelectTrigger>
                  <SelectValue placeholder="Select admin role" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="superAdmin">Super Admin</SelectItem>
                  <SelectItem value="regionalAdmin">Regional Admin</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Login
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminLogin;