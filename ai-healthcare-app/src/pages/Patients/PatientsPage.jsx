// src/pages/Patients/PatientsPage.jsx

import Sidebar from "../../components/Sidebar/Sidebar";
import Header from "../../components/Header/Header";
import Button from "../../components/Common/Button"
import patients from "../../data/patients";
import PatientDetailsModal from "./PatientDetailsModal";

import { useState } from "react";
import { FaSearch, FaUserInjured, FaPhoneAlt, FaBed } from "react-icons/fa";

const PatientsPage = () => {
  const user = JSON.parse(sessionStorage.getItem("user"));

  const [search, setSearch] = useState("");
  const [selectedPatient, setSelectedPatient] = useState(null);

 

  // Search Filter name 
  const filteredPatients = patients.filter((patient) =>
    patient.name.toLowerCase().includes(search.toLowerCase()),
  );

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

        {/* Page Title */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8">
          <div>
            <h1 className="text-4xl font-bold text-gray-800">
              Patients Management
            </h1>

            <p className="text-gray-500 mt-2">
              Search and manage admitted patients.
            </p>
          </div>

          {/* Search */}
          <div className="relative w-full md:w-[350px]">
            <FaSearch className="absolute left-4 top-4 text-gray-400" />

            <input
              type="text"
              placeholder="Search patient..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded-2xl border border-gray-300 bg-white py-3 pl-12 pr-4 outline-none focus:border-blue-500"
            />
          </div>
        </div>

        {/* Patients Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {filteredPatients.length > 0 ? (
            filteredPatients.map((patient) => (
              <div
                key={patient.id}
                className="bg-white rounded-3xl shadow-lg p-6 hover:scale-105 transition-all duration-300"
              >
                {/* Icon */}
                <div className="flex items-center justify-center h-16 w-16 rounded-2xl bg-blue-100 text-blue-600 text-3xl mb-5">
                  <FaUserInjured />
                </div>

                {/* Name */}
                <h2 className="text-2xl font-bold text-gray-800">
                  {patient.name}
                </h2>

                <p className="text-gray-500 mt-1">
                  {patient.age} Years • {patient.gender}
                </p>

                {/* Details */}
                <div className="mt-5 flex flex-col gap-3 text-gray-600">
                  <div className="flex items-center gap-3">
                    <FaPhoneAlt className="text-blue-500" />

                    <span>{patient.phone}</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <FaBed className="text-green-500" />

                    <span>Bed: {patient.bed}</span>
                  </div>
                </div>

                {/* Disease */}
                <div className="mt-5">
                  <span className="rounded-full bg-red-100 px-4 py-2 text-sm font-medium text-red-600">
                    {patient.disease}
                  </span>
                </div>

                {/* Button */}
                <Button
                  title="View"
                  onClick={() => setSelectedPatient(patient)}
                  className=" mt-6 w-full rounded-2xl bg-gradient-to-r  from-blue-600  to-cyan-500 py-3 font-semibold"
                />
              </div>
            ))
          ) : (
            <div className="col-span-full text-center text-gray-500 text-lg">
              No patients found
            </div>
          )}
        </div>
        <PatientDetailsModal
          selectedPatient={selectedPatient}
          setSelectedPatient={setSelectedPatient}
        />
      </main>
    </div>
  );
};

export default PatientsPage;
