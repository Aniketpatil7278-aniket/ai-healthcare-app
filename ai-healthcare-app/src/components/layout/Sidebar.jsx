// Sidebar.jsx

import { Link, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  ClipboardPlus,
  Users,
  Stethoscope,
  LogOut,
} from "lucide-react";

import "./Sidebar.scss";

const Sidebar = () => {
  const location = useLocation();

  const menuItems = [
    {
      name: "Dashboard",
      path: "/dashboard",
      icon: <LayoutDashboard size={20} />,
    },
    {
      name: "Admission",
      path: "/admission",
      icon: <ClipboardPlus size={20} />,
    },
    {
      name: "Patients",
      path: "/patients",
      icon: <Users size={20} />,
    },
  ];

  return (
    <aside className="sidebar">
      {/* Logo */}
      <div className="sidebar-top">
        <div className="logo">
          <div className="logo-icon">
            <Stethoscope size={22} />
          </div>

          <div className="logo-text">
            <h2>AI Healthcare</h2>
            <p>Admin Panel</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="sidebar-menu">
        {menuItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`menu-item ${
              location.pathname === item.path ? "active" : ""
            }`}
          >
            <span className="menu-icon">{item.icon}</span>

            <span>{item.name}</span>
          </Link>
        ))}
      </nav>

      {/* Bottom Section */}
      <div className="sidebar-bottom">
        <button className="logout-btn">
          <LogOut size={18} />

          <span>Logout</span>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
