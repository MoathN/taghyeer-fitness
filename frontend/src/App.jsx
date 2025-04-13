import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";

// Layouts
import MainLayout from "./layouts/MainLayout";
import AdminLayout from "./layouts/AdminLayout";

// Pages
import Home from "./pages/home/Home";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import ResetPassword from "./pages/auth/ResetPassword";
import WorkoutPlans from "./pages/workout-plans/WorkoutPlans";
import WorkoutPlanDetails from "./pages/workout-plans/WorkoutPlanDetails";
import CardioPrograms from "./pages/workout-plans/CardioPrograms";
import Dashboard from "./pages/dashboard/Dashboard";
import Shop from "./pages/shop/Shop";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Trainers from "./pages/trainers/Trainers";
import TrainerProfile from "./pages/trainers/TrainerProfile";
import TrainerTest from "./pages/trainers/TrainerTest";
import TrainerMichael from "./pages/trainers/TrainerMichael";
import TrainerEmily from "./pages/trainers/TrainerEmily";
import TrainerDavid from "./pages/trainers/TrainerDavid";
import TrainerJasmine from "./pages/trainers/TrainerJasmine";
import TrainerChris from "./pages/trainers/TrainerChris";
import Nutrition from "./pages/nutrition/Nutrition";
import FatLossMealPlan from "./pages/nutrition/FatLossMealPlan";
import MuscleGainPlan from "./pages/nutrition/MuscleGainPlan";
import BeginnersMealPlan from "./pages/nutrition/BeginnersMealPlan";
import MaintenancePlan from "./pages/nutrition/MaintenancePlan";
import VegetarianPlan from "./pages/nutrition/VegetarianPlan";
import PerformancePlan from "./pages/nutrition/PerformancePlan";
import Macronutrients101 from "./pages/nutrition/Macronutrients101";
import PrePostWorkout from "./pages/nutrition/PrePostWorkout";
import WeightLoss from "./pages/nutrition/WeightLoss";
import MuscleBuilding from "./pages/nutrition/MuscleBuilding";
import SupplementsGuide from "./pages/nutrition/SupplementsGuide";
import NutritionMyths from "./pages/nutrition/NutritionMyths";
import Memberships from "./pages/memberships/Memberships";
import FAQ from "./pages/faq/FAQ";
import PrivacyPolicy from "./pages/policies/PrivacyPolicy";
import TermsOfService from "./pages/legal/TermsOfService";

// Admin Pages
import ContactMessages from "./pages/admin/ContactMessages";
import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminUsers from "./pages/admin/AdminUsers";
import AdminMemberships from "./pages/admin/AdminMemberships";
import AdminWorkoutPlans from "./pages/admin/AdminWorkoutPlans";
import AdminProducts from "./pages/admin/AdminProducts";

// ScrollToTop component ensures the page is scrolled to top on navigation
function ScrollToTop() {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  return null;
}

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<MainLayout />}>
          {/* Public Routes */}
          <Route index element={<Home />} />
          <Route path="workout-plans" element={<WorkoutPlans />} />
          <Route path="workout-plans/cardio" element={<CardioPrograms />} />
          <Route path="workout-plans/:id" element={<WorkoutPlanDetails />} />
          <Route path="nutrition" element={<Nutrition />} />
          <Route path="nutrition/fat-loss-meal-plan" element={<FatLossMealPlan />} />
          <Route path="nutrition/muscle-gain-plan" element={<MuscleGainPlan />} />
          <Route path="nutrition/beginners-meal-plan" element={<BeginnersMealPlan />} />
          <Route path="nutrition/maintenance-plan" element={<MaintenancePlan />} />
          <Route path="nutrition/vegetarian-plan" element={<VegetarianPlan />} />
          <Route path="nutrition/performance-plan" element={<PerformancePlan />} />
          <Route path="nutrition/macronutrients-101" element={<Macronutrients101 />} />
          <Route path="nutrition/pre-post-workout" element={<PrePostWorkout />} />
          <Route path="nutrition/weight-loss" element={<WeightLoss />} />
          <Route path="nutrition/muscle-building" element={<MuscleBuilding />} />
          <Route path="nutrition/supplements-guide" element={<SupplementsGuide />} />
          <Route path="nutrition/nutrition-myths" element={<NutritionMyths />} />
          <Route path="trainers" element={<Trainers />} />
          <Route path="trainers/:id" element={<TrainerProfile />} />
          <Route path="sarah-profile" element={<TrainerTest />} />
          <Route path="michael-profile" element={<TrainerMichael />} />
          <Route path="emily-profile" element={<TrainerEmily />} />
          <Route path="david-profile" element={<TrainerDavid />} />
          <Route path="jasmine-profile" element={<TrainerJasmine />} />
          <Route path="chris-profile" element={<TrainerChris />} />
          <Route path="shop" element={<Shop />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="memberships" element={<Memberships />} />
          <Route path="faq" element={<FAQ />} />
          <Route path="privacy-policy" element={<PrivacyPolicy />} />
          <Route path="terms" element={<TermsOfService />} />

          {/* Authentication Routes */}
          <Route path="auth/login" element={<Login />} />
          <Route path="auth/register" element={<Register />} />
          <Route path="auth/reset-password" element={<ResetPassword />} />

          {/* Protected Routes (in a real app would have authentication check) */}
          <Route path="dashboard" element={<Dashboard />} />
          
          {/* Admin Routes */}
          <Route path="admin" element={<AdminLayout />}>
            <Route index element={<AdminDashboard />} />
            <Route path="users" element={<AdminUsers />} />
            <Route path="memberships" element={<AdminMemberships />} />
            <Route path="workout-plans" element={<AdminWorkoutPlans />} />
            <Route path="products" element={<AdminProducts />} />
            <Route path="contact-messages" element={<ContactMessages />} />
          </Route>

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
    </>
  );
}

export default App;
