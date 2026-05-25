// src/components/Discharge/BillingSummary.jsx

import Card from "../common/Card";

const BillingSummary = ({
  wardCharges,
  medicineCharges,
  doctorCharges,
  testCharges,
  totalCharges,
}) => {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold mb-5">Billing Summary</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        <Card
          title="Ward Charges"
          value={`₹ ${wardCharges}`}
          className="bg-blue-100"
        />

        <Card
          title="Medicine Charges"
          value={`₹ ${medicineCharges}`}
          className="bg-green-100"
        />

        <Card
          title="Doctor Charges"
          value={`₹ ${doctorCharges}`}
          className="bg-yellow-100"
        />

        <Card
          title="Test Charges"
          value={`₹ ${testCharges}`}
          className="bg-red-100"
        />
      </div>

      {/* Total */}
      <div className="bg-black text-white rounded-2xl p-6 mt-6">
        <h2 className="text-3xl font-bold">Total Amount : ₹ {totalCharges}</h2>
      </div>
    </div>
  );
};

export default BillingSummary;
