import { Routes, Route } from "react-router-dom";
import LandingPage from "../pages/LandingPage.jsx";
import SignupPage from "../pages/SignupPage.jsx";
import LoginPage from "../pages/LoginPage.jsx";
import ProfilePage from "../pages/ProfilePage.jsx";
import DashboardPage from "../pages/DashboardPage.jsx";
import NotFoundPage from "../pages/NotFoundPage.jsx";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/dashboard" element={<DashboardPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default AppRoutes;
