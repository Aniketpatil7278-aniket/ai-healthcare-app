import { Routes, Route, Navigate } from "react-router-dom";

import LoginPage from "./pages/Login/LoginPage";
import DashboardPage from "./pages/Dashboard/DashboardPage";

import ProtectedRoute from "./routes/ProtectedRoute";

function App() {
  const user = localStorage.getItem("user");

  return (
    <Routes>
      {/* Login Route */}

      <Route
        path="/"
        element={user ? <Navigate to="/dashboard" /> : <LoginPage />}
      />

      {/* Dashboard Protected Route */}

      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <DashboardPage />
          </ProtectedRoute>
        }
      />

      {/* 404 Route */}

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
