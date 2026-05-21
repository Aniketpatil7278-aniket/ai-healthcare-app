// ==========================
// src/components/BedAllocation/AllocationSummary.jsx
// ==========================

import Button from "../Common/Button";

const AllocationSummary = ({
  ward,
  bed,
  handleConfirm,
  setSelectedWard,
  setSelectedBed,
}) => {
  return (
    <div className="bg-white p-6 rounded-2xl shadow mt-8">
      <h2 className="text-2xl font-bold mb-5">Allocation Summary</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <p className="text-gray-500">Selected Ward</p>
          <h3 className="font-semibold">{ward.name}</h3>
        </div>

        <div>
          <p className="text-gray-500">Selected Bed</p>
          <h3 className="font-semibold">{bed.bedNumber}</h3>
        </div>

        <div>
          <p className="text-gray-500">Daily Charges</p>
          <h3 className="font-semibold">₹ {ward.charges}</h3>
        </div>

        <div>
          <p className="text-gray-500">Assigned Nurse</p>
          <h3 className="font-semibold">{ward.nurse}</h3>
        </div>
      </div>

      <div className="flex gap-4 mt-6">
        <Button
          title="Confirm Allocation"
          onClick={handleConfirm}
          className="bg-green-600 hover:bg-green-700"
        />

        <Button
          title="Change Ward"
          onClick={() => {
            setSelectedWard(null);
            setSelectedBed(null);
          }}
          className="bg-yellow-500 hover:bg-yellow-600"
        />

        <Button
          title="Cancel"
          onClick={() => {
            setSelectedWard(null);
            setSelectedBed(null);
          }}
          className="bg-red-600 hover:bg-red-700"
        />
      </div>
    </div>
  );
};

export default AllocationSummary;
