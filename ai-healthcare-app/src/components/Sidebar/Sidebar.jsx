// Sidebar.jsx

import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import {
  LayoutDashboard,
  ClipboardPlus,
  Users,
  CalendarDays,
  ReceiptText,
  BarChart3,
  LogOut,
} from "lucide-react";

import Swal from "sweetalert2";

import { logoutUser } from "../../redux/actions/authActions";
import Logo from "../../assets/logo";

const Sidebar = () => {
  const location = useLocation();

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const menuItems = [
    {
      name: "Dashboard",
      path: "/dashboard",
      icon: <LayoutDashboard size={20} />,
    },
    {
      name: "Admission Management",
      path: "/admission",
      icon: <ClipboardPlus size={20} />,
    },
    {
      name: "Patients",
      path: "/patients",
      icon: <Users size={20} />,
    },
    {
      name: "Appointments",
      path: "/appointments",
      icon: <CalendarDays size={20} />,
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
      // Redux Logout
      dispatch(logoutUser());
      sessionStorage.removeItem("user");
      Swal.fire({
        icon: "success",
        title: "Logout Successful",
        text: "Redirecting to login page...",
        timer: 1500,
        showConfirmButton: false,
      });

      setTimeout(() => {
        navigate("/");
      }, 1500);
    }
  };

  return (
    <aside className="w-[280px] min-h-screen px-[18px] py-6 bg-gradient-to-b from-slate-900 to-slate-800 text-white flex flex-col justify-between border-r border-white/10 sticky top-0 transition-all duration-300 max-[992px]:w-[90px] max-[992px]:px-3 max-[768px]:fixed max-[768px]:left-0 max-[768px]:top-0 max-[768px]:z-[999] max-[768px]:h-screen">
      {/* Logo */}
      <div>
        <div className="flex flex-col items-center">
          <Logo />

          <div className="text-center max-[992px]:hidden">
            <h2 className="text-[20px] font-bold">AI Healthcare</h2>

            <p className="text-[13px] text-slate-400 mt-[2px]">Admin Panel</p>
          </div>
        </div>

        {/* Navigation */}
        <nav className="mt-10 flex flex-col gap-3">
          {menuItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center gap-[14px] px-4 py-[14px] rounded-[18px] text-[15px] font-medium transition-all duration-300 ${
                location.pathname === item.path
                  ? "bg-gradient-to-br from-blue-500 to-indigo-500 text-white shadow-[0_8px_20px_rgba(59,130,246,0.25)]"
                  : "text-slate-300 hover:bg-blue-500/15 hover:text-white hover:translate-x-1"
              } max-[992px]:justify-center`}
            >
              <span className="flex items-center justify-center">
                {item.icon}
              </span>

              <span className="max-[992px]:hidden">{item.name}</span>
            </Link>
          ))}
        </nav>
      </div>

      {/* Logout */}
      <div>
        <button
          onClick={handleLogout}
          className="w-full flex items-center justify-center gap-[10px] py-[14px] border-none rounded-[18px] bg-white/5 text-slate-50 cursor-pointer text-[15px] font-medium transition-all duration-300 hover:bg-red-500/15 hover:text-red-300"
        >
          <LogOut size={18} />

          <span className="max-[992px]:hidden">Logout</span>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
