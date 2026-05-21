// src/components/BedAllocation/BedCard.jsx

const BedCard = ({ bed, selectedBed, setSelectedBed }) => {
  const getColor = () => {
    switch (bed.status) {
      case "Available":
        return "bg-green-500";

      case "Occupied":
        return "bg-red-500";

      case "Cleaning":
        return "bg-yellow-500";

      case "Reserved":
        return "bg-blue-500";

      default:
        return "bg-gray-500";
    }
  };

  return (
    <div
      onClick={() => bed.status === "Available" && setSelectedBed(bed)}
      className={`p-4 rounded-xl text-white cursor-pointer transition-all ${getColor()} ${
        selectedBed?.id === bed.id ? "ring-4 ring-black" : ""
      }`}
    >
      <h3 className="font-bold">{bed.bedNumber}</h3>

      <p>{bed.status}</p>
    </div>
  );
};

export default BedCard;
