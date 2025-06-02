import { useEffect } from "react";
import { Outlet, useNavigate, useOutletContext, Link, useLocation } from "react-router-dom";
import { FaUsers, FaIdCard, FaDumbbell, FaShoppingCart, FaEnvelope, FaTachometerAlt } from "react-icons/fa";

const AdminLayout = () => {
  // Get the full context from the parent MainLayout
  const context = useOutletContext();
  const { user } = context || {};
  const navigate = useNavigate();
  const location = useLocation();

  // Function to check if a path is active
  const isActive = (path) => {
    if (path === '/admin') {
      return location.pathname === '/admin';
    }
    return location.pathname.startsWith(path);
  };

  // Check if user is admin, if not redirect to login
  useEffect(() => {
    if (!user) {
      navigate("/auth/login");
      return;
    }

    if (user.role !== "admin") {
      navigate("/dashboard");
    }
  }, [user, navigate]);

  // If no user yet (still loading), show loading
  if (!user) {
    return (
      <div className="flex h-screen items-center justify-center">
        <div className="text-center">
          <div className="mb-4 h-12 w-12 animate-spin rounded-full border-4 border-primary border-t-transparent mx-auto"></div>
          <p>Loading...</p>
        </div>
      </div>
    );
  }

  const navItems = [
    { path: "/admin", label: "Dashboard", icon: <FaTachometerAlt className="text-primary" /> },
    { path: "/admin/users", label: "Users", icon: <FaUsers className="text-primary" /> },
    { path: "/admin/memberships", label: "Memberships", icon: <FaIdCard className="text-primary" /> },
    { path: "/admin/workout-plans", label: "Workout Plans", icon: <FaDumbbell className="text-primary" /> },
    { path: "/admin/products", label: "Products", icon: <FaShoppingCart className="text-primary" /> },
    { path: "/admin/contact-messages", label: "Contact Messages", icon: <FaEnvelope className="text-primary" /> },
  ];

  return (
    <div className="flex min-h-screen bg-gray-100 dark:bg-gray-900">
      {/* Admin Sidebar */}
      <aside className="w-64 bg-white dark:bg-gray-800 shadow-md">
        <div className="p-6 border-b border-gray-200 dark:border-gray-700">
          <h2 className="text-2xl font-bold text-primary">Admin Panel</h2>
          <p className="text-sm text-gray-500 dark:text-gray-400">Welcome, {user.name}</p>
        </div>
        <nav className="p-4">
          <ul className="space-y-2">
            {navItems.map((item) => (
              <li key={item.path}>
                <Link 
                  to={item.path} 
                  className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-colors ${
                    isActive(item.path) 
                      ? "bg-primary/10 text-primary font-medium" 
                      : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                  }`}
                >
                  {item.icon}
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        <Outlet context={context} />
      </main>
    </div>
  );
};

export default AdminLayout;