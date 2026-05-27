import { Routes, Route, Navigate } from "react-router-dom";
import ProtectedRoute from "./routes/ProtectedRoute";


import LoginPage from "./pages/Login/LoginPage";

import DashboardPage from "./pages/Dashboard/DashboardPage";
import ForgotPasswordPage from "./pages/ForgotPassword/ForgotPasswordPage";
import PatientsPage from "./pages/Patients/PatientsPage";
import AdmissionPage from "./pages/Admission/AdmissionPage";
import BedWardAllocationPage from "./pages/BedAllocation/BedAllocationPage";
import DischargePage from "./pages/Discharge/DischargePage";
import ReportsPage from "./pages/Reports/ReportsPage";

import { useSelector } from "react-redux";

function App() {
  // const user = sessionStorage.getItem("user");
   const { isAuthenticated } = useSelector((state) => state.auth);

  return (
    <Routes>
      {/* Login Route */}

      {/* <Route
        path="/"
        element={user ? <Navigate to="/dashboard" /> : <LoginPage />}
      /> */}
       
        {/* Login */}
        <Route
          path="/"
          element={
            isAuthenticated ? (
              <Navigate to="/dashboard" replace />
            ) : (
              <LoginPage />
            )
          }
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
      {/* Bed/Ward Allocation */}
      <Route
        path="/bed-allocation"
        element={
          <ProtectedRoute>
            <BedWardAllocationPage />
          </ProtectedRoute>
        }
      />

      {/*Strat Dischareg*/}
      <Route
        path="/start-discharge"
        element={
          <ProtectedRoute>
            <DischargePage />
          </ProtectedRoute>
        }
      />
      {/*Report*/}
      <Route
        path="/reports"
        element={
          <ProtectedRoute>
            <ReportsPage />
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
