import { FaHeartbeat } from "react-icons/fa";

const Logo = () => {
  return (
    <div
      className="mx-auto mb-5 flex h-[85px] w-[85px]
      items-center justify-center rounded-[24px]
      bg-gradient-to-br from-blue-600 to-cyan-500
      text-[40px] text-white shadow-lg"
    >
      <FaHeartbeat />
    </div>
  );
};

export default Logo;
