// DashboardPage.jsx
import Sidebar from "../../components/Sidebar/Sidebar";
import Header from "../../components/Header/Header";
// import Card from "../../components/common/Card";
import DashboardCard from "../../components/Common/DashboardCard";
import { FaHospital, FaProcedures, FaUserInjured, FaBed } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const DashboardPage = () => {
  const user = JSON.parse(sessionStorage.getItem("user"));
  const navigate = useNavigate();

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main className="flex-1 p-4 md:p-8">
        {/* Header */}
        <div className="mb-8">
          <Header user={user} />
        </div>

        {/* Welcome Section */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
          <div>
            <h2 className="text-3xl font-bold text-gray-800">
              Welcome, {user?.name}
            </h2>

            <p className="text-gray-500 mt-1">
              Manage admissions and hospital operations efficiently.
            </p>
          </div>
        </div>

        {/* Statistics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="relative">
            <DashboardCard title="Total Admissions" value="120" />

            <FaHospital className="absolute top-5 right-5 text-4xl text-blue-500" />
          </div>

          <div className="relative">
            <DashboardCard title="Available Beds" value="50" />

            <FaBed className="absolute top-5 right-5 text-4xl text-green-500" />
          </div>

          <div className="relative">
            <DashboardCard title="Occupied Beds" value="75" />

            <FaProcedures className="absolute top-5 right-5 text-4xl text-red-500" />
          </div>

          <div className="relative">
            <DashboardCard title="Today's Discharges" value="12" />

            <FaUserInjured className="absolute top-5 right-5 text-4xl text-yellow-500" />
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mt-10 bg-white p-6 rounded-2xl shadow">
          <h2 className="text-2xl font-bold mb-6">Quick Actions</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            <button
              onClick={() => navigate("/admission")}
              className="bg-blue-600 hover:bg-blue-700 transition-all text-white p-4 rounded-xl"
            >
              New Admission
            </button>

            <button className="bg-green-600 hover:bg-green-700 transition-all text-white p-4 rounded-xl">
              Allocate Bed
            </button>

            <button
              onClick={() => navigate("/patients")}
              className="bg-yellow-500 hover:bg-yellow-600 transition-all text-white p-4 rounded-xl"
            >
              Start Discharge
            </button>

            <button
              onClick={() => navigate("/patients")}
              className="bg-purple-600 hover:bg-purple-700 transition-all text-white p-4 rounded-xl"
            >
              Search Patient
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default DashboardPage;
