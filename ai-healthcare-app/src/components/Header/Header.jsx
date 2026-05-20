// Header.jsx

import { Bell, Search, Menu } from "lucide-react";

const Header = ({ user, onMenuClick }) => {
  return (
    <header
      className="
        w-full
        px-6
        py-[18px]
        bg-white/85
        backdrop-blur-[12px]
        rounded-[24px]
        border
        border-gray-200
        shadow-[0_4px_20px_rgba(0,0,0,0.05)]
        flex
        items-center
        justify-between
        gap-5

        max-[768px]:p-4
        max-[768px]:flex-wrap
      "
    >
      {/* Left Section */}
      <div className="flex items-center gap-[14px]">
        <button
          onClick={onMenuClick}
          className="
            hidden
            w-[42px]
            h-[42px]
            rounded-[14px]
            bg-gray-100
            transition-all
            duration-300
            hover:bg-gray-200

            max-[992px]:flex
            items-center
            justify-center
          "
        >
          <Menu size={20} />
        </button>

        <div>
          <h1
            className="
              text-[28px]
              font-bold
              text-gray-900

              max-[576px]:text-[22px]
            "
          >
            Dashboard
          </h1>

          <p
            className="
              text-[14px]
              text-gray-500
              mt-1

              max-[576px]:hidden
            "
          >
            Welcome back 👋
          </p>
        </div>
      </div>

      {/* Search Section */}
      <div
        className="
          flex-1
          max-w-[450px]
          bg-gray-50
          border
          border-gray-200
          rounded-[18px]
          px-4
          py-3
          flex
          items-center
          gap-[10px]
          transition-all
          duration-300
          focus-within:border-blue-500
          focus-within:shadow-[0_0_0_4px_rgba(59,130,246,0.15)]

          max-[768px]:order-3
          max-[768px]:max-w-full
          max-[768px]:w-full
        "
      >
        <Search size={18} className="text-gray-400" />

        <input
          type="text"
          placeholder="Search here..."
          className="
            w-full
            border-none
            bg-transparent
            outline-none
            text-[14px]
            text-gray-900
            placeholder:text-gray-400
          "
        />
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-4">
        {/* Notification */}
        <button
          className="
            relative
            w-[46px]
            h-[46px]
            rounded-[16px]
            bg-gray-100
            flex
            items-center
            justify-center
            cursor-pointer
            transition-all
            duration-300
            hover:bg-blue-100
            hover:-translate-y-[2px]
          "
        >
          <Bell size={20} />

          <span
            className="
              absolute
              top-[10px]
              right-[10px]
              w-[10px]
              h-[10px]
              bg-red-500
              rounded-full
              border-2
              border-white
            "
          ></span>
        </button>

        {/* User Card */}
        <div
          className="
            flex
            items-center
            gap-3
            px-[14px]
            py-2
            rounded-[18px]
            bg-gradient-to-r
            from-blue-50
            to-indigo-50
            border
            border-blue-100
            transition-all
            duration-300
            cursor-pointer
            hover:-translate-y-[2px]
            hover:shadow-[0_6px_20px_rgba(59,130,246,0.12)]
          "
        >
          {/* Avatar */}
          <div
            className="
              w-[46px]
              h-[46px]
              rounded-full
              bg-gradient-to-br
              from-blue-500
              to-indigo-500
              flex
              items-center
              justify-center
              text-white
              font-bold
              text-[18px]
              shadow-[0_4px_12px_rgba(59,130,246,0.3)]
            "
          >
            {user?.name?.charAt(0) || "U"}
          </div>

          {/* User Info */}
          <div className="max-[576px]:hidden">
            <h4 className="text-[14px] font-semibold text-gray-900">
              {user?.name || "Guest User"}
            </h4>

            <p className="text-[12px] text-gray-500 mt-[2px]">
              {user?.role || "Admin"}
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
