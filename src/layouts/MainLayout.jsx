import { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { toast } from "sonner";

const MainLayout = () => {
  // Mock user state - in a real app, this would come from an auth context
  const [user, setUser] = useState(null);

  const handleLogout = () => {
    setUser(null);
    toast.success("Logged out successfully");
  };

  // Mock login function for demonstration purposes
  const handleLogin = (userData) => {
    setUser(userData);
    toast.success("Logged in successfully");
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Header user={user} onLogout={handleLogout} />
      <main className="flex-1">
        <Outlet context={{ user, login: handleLogin, logout: handleLogout }} />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
