// src/components/BedAllocation/WardCard.jsx

const WardCard = ({ ward, selectedWard, setSelectedWard }) => {
  return (
    <div
      onClick={() => setSelectedWard(ward)}
      className={`cursor-pointer rounded-2xl p-5 shadow transition-all ${
        selectedWard?.id === ward.id
          ? "bg-blue-600 text-white"
          : "bg-white hover:shadow-lg"
      }`}
    >
      <h2 className="text-xl font-bold">{ward.name}</h2>

      <div className="mt-4 space-y-2">
        <p>Total Beds: {ward.totalBeds}</p>

        <p>Occupied Beds: {ward.occupiedBeds}</p>

        <p>Available Beds: {ward.availableBeds}</p>

        <p>Ward Type: {ward.type}</p>
      </div>
    </div>
  );
};

export default WardCard;
