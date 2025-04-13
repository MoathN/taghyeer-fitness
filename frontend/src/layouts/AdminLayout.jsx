import { useEffect } from "react";
import { Outlet, useNavigate, useOutletContext, Link } from "react-router-dom";
import { FaUsers, FaIdCard, FaDumbbell, FaShoppingCart, FaEnvelope, FaTachometerAlt } from "react-icons/fa";

const AdminLayout = () => {
  const { user } = useOutletContext();
  const navigate = useNavigate();

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
            <li>
              <Link 
                to="/admin" 
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              >
                <FaTachometerAlt className="text-primary" />
                Dashboard
              </Link>
            </li>
            <li>
              <Link 
                to="/admin/users" 
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              >
                <FaUsers className="text-primary" />
                Users
              </Link>
            </li>
            <li>
              <Link 
                to="/admin/memberships" 
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              >
                <FaIdCard className="text-primary" />
                Memberships
              </Link>
            </li>
            <li>
              <Link 
                to="/admin/workout-plans" 
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              >
                <FaDumbbell className="text-primary" />
                Workout Plans
              </Link>
            </li>
            <li>
              <Link 
                to="/admin/products" 
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              >
                <FaShoppingCart className="text-primary" />
                Products
              </Link>
            </li>
            <li>
              <Link 
                to="/admin/contact-messages" 
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              >
                <FaEnvelope className="text-primary" />
                Contact Messages
              </Link>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        <Outlet context={{ user }} />
      </main>
    </div>
  );
};

export default AdminLayout;