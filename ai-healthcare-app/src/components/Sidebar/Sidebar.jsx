// src/components/Sidebar/Sidebar.jsx

import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useState } from "react";

import {
  LayoutDashboard,
  ClipboardPlus,
  Users,
  ReceiptText,
  BarChart3,
  LogOut,
  ChevronDown,
  ChevronRight,
  BedDouble,
  BadgePlus,
  FileMinus,
  Menu,
  X,
} from "lucide-react";

import Swal from "sweetalert2";

import { logoutUser } from "../../redux/actions/authActions";
import Logo from "../../assets/logo";

const Sidebar = () => {
  const location = useLocation();

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const [openAdmission, setOpenAdmission] = useState(true);

  const [mobileOpen, setMobileOpen] = useState(false);

  const menuItems = [
    {
      name: "Dashboard",
      path: "/dashboard",
      icon: <LayoutDashboard size={20} />,
    },

    {
      name: "Patients",
      path: "/patients",
      icon: <Users size={20} />,
    },

    {
      name: "Billing",
      path: "/billing",
      icon: <ReceiptText size={20} />,
    },

    {
      name: "Reports",
      path: "/reports",
      icon: <BarChart3 size={20} />,
    },
  ];

  // Logout Function
  const handleLogout = async () => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "You want to logout?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Logout",
    });

    if (result.isConfirmed) {
      dispatch(logoutUser());

      sessionStorage.removeItem("user");

      Swal.fire({
        icon: "success",
        title: "Logout Successful",
        text: "Redirecting to login page...",
        timer: 1200,
        showConfirmButton: false,
      });

      setTimeout(() => {
        navigate("/");
      }, 1200);
    }
  };

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setMobileOpen(true)}
        className="md:hidden fixed top-4 left-4 z-[1001] bg-blue-600 text-white p-2 rounded-lg shadow-lg"
      >
        <Menu size={24} />
      </button>

      {/* Overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-[999] md:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
        fixed md:sticky top-0 left-0 z-[1000]
        h-screen w-[290px]
        bg-gradient-to-b from-slate-900 to-slate-800
        text-white
        flex flex-col justify-between
        border-r border-white/10
        transition-all duration-300
        overflow-y-auto

        ${mobileOpen ? "translate-x-0" : "-translate-x-full"}
        md:translate-x-0
      `}
      >
        {/* Top */}
        <div>
          {/* Header */}
          <div className="flex items-center justify-between p-5 border-b border-white/10">
            <div className="flex items-center gap-3">
              <Logo />

              <div>
                <h2 className="text-lg font-bold">AI Healthcare</h2>

                <p className="text-xs text-slate-400">Admin Panel</p>
              </div>
            </div>

            {/* Close Button Mobile */}
            <button onClick={() => setMobileOpen(false)} className="md:hidden">
              <X size={24} />
            </button>
          </div>

          {/* Navigation */}
          <nav className="p-4 flex flex-col gap-2">
            {/* Dashboard */}
            {menuItems.slice(0, 1).map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setMobileOpen(false)}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 ${
                  location.pathname === item.path
                    ? "bg-blue-600 text-white shadow-lg"
                    : "text-slate-300 hover:bg-white/10 hover:text-white"
                }`}
              >
                {item.icon}

                <span>{item.name}</span>
              </Link>
            ))}

            {/* Admission Management */}
            <div className="mt-2">
              <button
                onClick={() => setOpenAdmission(!openAdmission)}
                className="w-full flex items-center justify-between px-4 py-3 rounded-xl text-slate-200 hover:bg-white/10 transition-all"
              >
                <div className="flex items-center gap-3">
                  <ClipboardPlus size={20} />

                  <span className="max-[992px]:hidden font-semibold whitespace-nowrap">
                    Admission Management
                  </span>
                </div>

                {openAdmission ? (
                  <ChevronDown size={18} />
                ) : (
                  <ChevronRight size={18} />
                )}
              </button>

              {/* Sub Menu */}
              {openAdmission && (
                <div className="ml-5 mt-2 flex flex-col gap-2 border-l border-slate-700 pl-4">
                  {/* New Admission */}
                  <Link
                    to="/admission"
                    onClick={() => setMobileOpen(false)}
                    className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-all ${
                      location.pathname === "/admission"
                        ? "bg-blue-500 text-white"
                        : "text-slate-300 hover:bg-white/10 hover:text-white"
                    }`}
                  >
                    <BadgePlus size={18} />

                    <span>New Admission</span>
                  </Link>

                  {/* Bed Allocation */}
                  <Link
                    to="/bed-allocation"
                    onClick={() => setMobileOpen(false)}
                    className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-all ${
                      location.pathname === "/bed-allocation"
                        ? "bg-blue-500 text-white"
                        : "text-slate-300 hover:bg-white/10 hover:text-white"
                    }`}
                  >
                    <BedDouble size={18} />

                    <span>Allocate Bed</span>
                  </Link>

                  {/* Discharge */}
                  <Link
                    to="/start-discharge"
                    onClick={() => setMobileOpen(false)}
                    className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-all ${
                      location.pathname === "/start-discharge"
                        ? "bg-blue-500 text-white"
                        : "text-slate-300 hover:bg-white/10 hover:text-white"
                    }`}
                  >
                    <FileMinus size={18} />

                    <span>Discharge</span>
                  </Link>
                </div>
              )}
            </div>

            {/* Other Menus */}
            {menuItems.slice(1).map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setMobileOpen(false)}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 ${
                  location.pathname === item.path
                    ? "bg-blue-600 text-white shadow-lg"
                    : "text-slate-300 hover:bg-white/10 hover:text-white"
                }`}
              >
                {item.icon}

                <span>{item.name}</span>
              </Link>
            ))}
          </nav>
        </div>

        {/* Logout */}
        <div className="p-4 border-t border-white/10">
          <button
            onClick={handleLogout}
            className="w-full flex items-center justify-center gap-3 py-3 rounded-xl bg-red-500/10 text-red-300 hover:bg-red-500/20 transition-all"
          >
            <LogOut size={18} />

            <span>Logout</span>
          </button>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
