//src\routes\ProtectedRoute.jsx
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  // const user = localStorage.getItem("user");
    const user = sessionStorage.getItem("user");


  return user ? children : <Navigate to="/" replace />;
};

export default ProtectedRoute;
