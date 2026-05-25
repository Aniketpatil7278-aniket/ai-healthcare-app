// src/pages/Reports/ReportsPage.jsx

import Sidebar from "../../components/Sidebar/Sidebar";
import Header from "../../components/Header/Header";
import Card from "../../components/common/Card";

import patients from "../../data/patients";
import doctors from "../../data/doctors";
import wards from "../../data/wards";
import beds from "../../data/beds";

const ReportsPage = () => {
  const user = JSON.parse(sessionStorage.getItem("user"));

  // =========================
  // Reports Data
  // =========================

  const totalPatients = patients.length;

  const totalDoctors = doctors.length;

  const totalWards = wards.length;

  const availableBeds = beds.filter(
    (bed) => bed.status === "Available"
  ).length;

  const occupiedBeds = beds.filter(
    (bed) => bed.status === "Occupied"
  ).length;

  const reservedBeds = beds.filter(
    (bed) => bed.status === "Reserved"
  ).length;

  const criticalPatients = patients.filter(
    (patient) => patient.status === "Critical"
  ).length;

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main className="flex-1 p-6">
        {/* Header */}
        <Header user={user} />

        {/* Breadcrumb */}
        <div className="mb-6 text-gray-500">
          Dashboard &gt; Reports
        </div>

        {/* Page Title */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800">
            Hospital Reports Dashboard
          </h1>

          <p className="text-gray-500 mt-2">
            Overview of hospital admission, wards, beds and patients
          </p>
        </div>

        {/* Report Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
          <Card title="Total Patients" value={totalPatients} />

          <Card title="Total Doctors" value={totalDoctors} />

          <Card title="Total Wards" value={totalWards} />

          <Card title="Available Beds" value={availableBeds} />

          <Card title="Occupied Beds" value={occupiedBeds} />

          <Card title="Reserved Beds" value={reservedBeds} />

          <Card title="Critical Patients" value={criticalPatients} />
        </div>

        {/* Ward Report */}
        <div className="bg-white rounded-2xl shadow p-6 mb-8">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">
            Ward Reports
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-blue-50">
                  <th className="p-3 text-left">Ward Name</th>
                  <th className="p-3 text-left">Type</th>
                  <th className="p-3 text-left">Total Beds</th>
                  <th className="p-3 text-left">Occupied</th>
                  <th className="p-3 text-left">Available</th>
                  <th className="p-3 text-left">Charges</th>
                  <th className="p-3 text-left">Nurse</th>
                </tr>
              </thead>

              <tbody>
                {wards.map((ward) => (
                  <tr
                    key={ward.id}
                    className="border-b hover:bg-gray-50"
                  >
                    <td className="p-3 font-medium">{ward.name}</td>

                    <td className="p-3">{ward.type}</td>

                    <td className="p-3">{ward.totalBeds}</td>

                    <td className="p-3">{ward.occupiedBeds}</td>

                    <td className="p-3 text-green-600 font-semibold">
                      {ward.availableBeds}
                    </td>

                    <td className="p-3">₹ {ward.charges}</td>

                    <td className="p-3">{ward.nurse}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Bed Status Report */}
        <div className="bg-white rounded-2xl shadow p-6 mb-8">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">
            Bed Status Report
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-green-50">
                  <th className="p-3 text-left">Bed Number</th>
                  <th className="p-3 text-left">Ward ID</th>
                  <th className="p-3 text-left">Status</th>
                </tr>
              </thead>

              <tbody>
                {beds.map((bed) => (
                  <tr
                    key={bed.id}
                    className="border-b hover:bg-gray-50"
                  >
                    <td className="p-3 font-medium">
                      {bed.bedNumber}
                    </td>

                    <td className="p-3">{bed.wardId}</td>

                    <td
                      className={`p-3 font-semibold ${
                        bed.status === "Available"
                          ? "text-green-600"
                          : bed.status === "Occupied"
                          ? "text-red-500"
                          : bed.status === "Reserved"
                          ? "text-yellow-500"
                          : "text-blue-500"
                      }`}
                    >
                      {bed.status}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Recent Patients */}
        <div className="bg-white rounded-2xl shadow p-6">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">
            Recent Admissions
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-purple-50">
                  <th className="p-3 text-left">Patient ID</th>
                  <th className="p-3 text-left">Name</th>
                  <th className="p-3 text-left">Doctor</th>
                  <th className="p-3 text-left">Ward</th>
                  <th className="p-3 text-left">Bed</th>
                  <th className="p-3 text-left">Status</th>
                </tr>
              </thead>

              <tbody>
                {patients.map((patient) => (
                  <tr
                    key={patient.id}
                    className="border-b hover:bg-gray-50"
                  >
                    <td className="p-3">{patient.patientId}</td>

                    <td className="p-3 font-medium">
                      {patient.name}
                    </td>

                    <td className="p-3">{patient.doctor}</td>

                    <td className="p-3">{patient.room}</td>

                    <td className="p-3">{patient.bed}</td>

                    <td
                      className={`p-3 font-semibold ${
                        patient.status === "Critical"
                          ? "text-red-500"
                          : patient.status === "Recovered"
                          ? "text-green-600"
                          : "text-blue-600"
                      }`}
                    >
                      {patient.status}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ReportsPage;