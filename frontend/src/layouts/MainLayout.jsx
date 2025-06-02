import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import ScrollToTop from "../components/ScrollToTop";
import { useAuth } from "@/contexts/AuthContext";

const MainLayout = () => {
  const { user, login, logout } = useAuth();

  return (
    <div className="flex min-h-screen flex-col">
      <ScrollToTop />
      <Header user={user} onLogout={logout} />
      <main className="flex-1">
        <Outlet context={{ user, login, logout }} />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
