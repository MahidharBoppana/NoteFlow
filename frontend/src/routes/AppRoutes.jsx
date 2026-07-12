import { Routes, Route } from "react-router-dom";
import LandingPage from "../pages/LandingPage.jsx";
import SignupPage from "../pages/RegisterPage.jsx";
import LoginPage from "../pages/LoginPage.jsx";
import ProfilePage from "../pages/ProfilePage.jsx";
import DashboardPage from "../pages/DashboardPage.jsx";
import TrashPage from "../pages/TrashPage.jsx";
import NotFoundPage from "../pages/NotFoundPage.jsx";
import ProtectedRoute from "./ProtectedRoutes.jsx";
import PublicRoute from "./PublicRoutes.jsx";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route
        path="/login"
        element={
          <PublicRoute>
            <LoginPage />
          </PublicRoute>
        }
      />

      <Route
        path="/register"
        element={
          <PublicRoute>
            <SignupPage />
          </PublicRoute>
        }
      />

      <Route
        path="/profile"
        element={
          <ProtectedRoute>
            <ProfilePage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <DashboardPage />
          </ProtectedRoute>
        }
      />

      <Route
        path="/trash"
        element={
          <ProtectedRoute>
            <TrashPage />
          </ProtectedRoute>
        }
      />

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default AppRoutes;
