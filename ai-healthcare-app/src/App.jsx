import { Routes, Route, Navigate } from "react-router-dom";

import LoginPage from "./pages/Login/LoginPage";

import DashboardPage from "./pages/Dashboard/DashboardPage";

import ProtectedRoute from "./routes/ProtectedRoute";

import ForgotPasswordPage from "./pages/ForgotPassword/ForgotPasswordPage";

import PatientsPage from "./pages/Patients/PatientsPage";

import AdmissionPage from "./pages/Admission/AdmissionPage";

function App() {
  const user = sessionStorage.getItem("user");

  return (
    <Routes>
      {/* Login Route */}

      <Route
        path="/"
        element={user ? <Navigate to="/dashboard" /> : <LoginPage />}
      />

      {/* Forgot Password */}

      <Route path="/forgot-password" element={<ForgotPasswordPage />} />

      {/* Protected Dashboard */}

      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <DashboardPage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/patients"
        element={
          <ProtectedRoute>
            <PatientsPage />
          </ProtectedRoute>
        }
      />
      {/* Admission Page */}
      <Route
        path="/admission"
        element={
          <ProtectedRoute>
            <AdmissionPage />
          </ProtectedRoute>
        }
      />

      {/* 404 */}

      <Route
        path="*"
        element={
          <h1 className="text-center mt-10 text-3xl font-bold">
            404 Page Not Found
          </h1>
        }
      />
    </Routes>
  );
}

export default App;
