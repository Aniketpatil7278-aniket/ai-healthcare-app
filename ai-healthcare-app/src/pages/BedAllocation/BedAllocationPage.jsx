// src/pages/BedAllocation/BedAllocationPage.jsx

import { useState } from "react";

import Swal from "sweetalert2";

import Sidebar from "../../components/Sidebar/Sidebar";
import Header from "../../components/Header/Header";

import wards from "../../data/wards";
import beds from "../../data/beds";

import WardCard from "../../components/BedAllocation/WardCard";
import BedGrid from "../../components/BedAllocation/BedGrid";
import AllocationSummary from "../../components/BedAllocation/AllocationSummary";
import BedFilter from "../../components/BedAllocation/BedFilter";

const BedAllocationPage = () => {
  const user = JSON.parse(sessionStorage.getItem("user"));

  const [selectedWard, setSelectedWard] = useState(null);

  const [selectedBed, setSelectedBed] = useState(null);

  const [search, setSearch] = useState("");

  // Filter Beds
  const filteredBeds = beds.filter(
    (bed) =>
      bed.wardId === selectedWard?.id &&
      bed.bedNumber.toLowerCase().includes(search.toLowerCase()),
  );

  // Confirm Allocation
  const handleConfirm = () => {
    if (!selectedWard || !selectedBed) {
      Swal.fire({
        icon: "error",
        title: "Validation Error",
        text: "Please select ward and bed",
      });

      return;
    }

    Swal.fire({
      title: "Confirm Allocation?",
      text: `Allocate Bed ${selectedBed.bedNumber}?`,
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#16a34a",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Allocated Successfully",
          text: "Bed allocated successfully",
          icon: "success",
        });
      }
    });
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />

      <main className="flex-1 p-6">
        <Header user={user} />

        {/* Header */}
        {/* <div className="bg-white p-6 rounded-2xl shadow mb-6">
          <h2 className="text-2xl font-bold">Bed/Ward Allocation</h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-4">
            <div>
              <p className="text-gray-500">Patient Name</p>
              <h3 className="font-semibold">Rahul Sharma</h3>
            </div>

            <div>
              <p className="text-gray-500">Admission ID</p>
              <h3 className="font-semibold">ADM1025</h3>
            </div>

            <div>
              <p className="text-gray-500">Department</p>
              <h3 className="font-semibold">Cardiology</h3>
            </div>

            <div>
              <p className="text-gray-500">Admission Type</p>
              <h3 className="font-semibold">Emergency</h3>
            </div>
          </div>
        </div> */}

        {/* Search */}
        <div className="mt-2">
          <BedFilter search={search} setSearch={setSearch} />
        </div>

        {/* Ward Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-6">
          {wards.map((ward) => (
            <WardCard
              key={ward.id}
              ward={ward}
              selectedWard={selectedWard}
              setSelectedWard={setSelectedWard}
            />
          ))}
        </div>

        {/* Bed Grid */}
        {selectedWard && (
          <div className="mt-8">
            <h2 className="text-2xl font-bold mb-5">
              Beds - {selectedWard.name}
            </h2>

            <BedGrid
              beds={filteredBeds}
              selectedBed={selectedBed}
              setSelectedBed={setSelectedBed}
            />
          </div>
        )}

        {/* Summary */}
        {selectedWard && selectedBed && (
          <AllocationSummary
            ward={selectedWard}
            bed={selectedBed}
            handleConfirm={handleConfirm}
            setSelectedWard={setSelectedWard}
            setSelectedBed={setSelectedBed}
          />
        )}
      </main>
    </div>
  );
};

export default BedAllocationPage;
