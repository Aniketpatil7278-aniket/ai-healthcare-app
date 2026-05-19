// Header.jsx

import { Bell, Search, Menu } from "lucide-react";
import "./Header.scss";

const Header = ({ user, onMenuClick }) => {
  return (
    <header className="dashboard-header">
      {/* Left Section */}
      <div className="header-left">
        <button className="menu-btn" onClick={onMenuClick}>
          <Menu size={20} />
        </button>

        <div className="title-section">
          <h1>Dashboard</h1>
          <p>Welcome back 👋</p>
        </div>
      </div>

      {/* Search Section */}
      <div className="search-section">
        <Search size={18} className="search-icon" />

        <input type="text" placeholder="Search here..." />
      </div>

      {/* Right Section */}
      <div className="header-right">
        {/* Notification */}
        <button className="notification-btn">
          <Bell size={20} />

          <span className="notification-dot"></span>
        </button>

        {/* User Card */}
        <div className="user-card">
          <div className="avatar">{user?.name?.charAt(0) || "U"}</div>

          <div className="user-info">
            <h4>{user?.name || "Guest User"}</h4>

            <p>{user?.role || "Admin"}</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
