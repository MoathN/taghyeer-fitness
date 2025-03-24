import { Routes, Route } from "react-router-dom";

// Layouts
import MainLayout from "./layouts/MainLayout";

// Pages
import Home from "./pages/home/Home";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import WorkoutPlans from "./pages/workout-plans/WorkoutPlans";
import Dashboard from "./pages/dashboard/Dashboard";
import Shop from "./pages/shop/Shop";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Trainers from "./pages/trainers/Trainers";
import Nutrition from "./pages/nutrition/Nutrition";
import Memberships from "./pages/memberships/Memberships";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        {/* Public Routes */}
        <Route index element={<Home />} />
        <Route path="workout-plans" element={<WorkoutPlans />} />
        <Route path="nutrition" element={<Nutrition />} />
        <Route path="trainers" element={<Trainers />} />
        <Route path="shop" element={<Shop />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="memberships" element={<Memberships />} />

        {/* Authentication Routes */}
        <Route path="auth/login" element={<Login />} />
        <Route path="auth/register" element={<Register />} />

        {/* Protected Routes (in a real app would have authentication check) */}
        <Route path="dashboard" element={<Dashboard />} />

        {/* Catch-all route for 404 */}
        <Route
          path="*"
          element={
            <div className="flex h-[70vh] w-full items-center justify-center text-gymmawy-white">
              <div className="text-center">
                <h1 className="text-4xl font-bold">404</h1>
                <p className="mt-2 text-xl">Page not found</p>
              </div>
            </div>
          }
        />
      </Route>
    </Routes>
  );
}

export default App;
