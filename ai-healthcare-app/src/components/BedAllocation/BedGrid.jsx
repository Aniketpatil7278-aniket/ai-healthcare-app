// src/components/BedAllocation/BedGrid.jsx

import BedCard from "./BedCard";

const BedGrid = ({ beds, selectedBed, setSelectedBed }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
      {beds.map((bed) => (
        <BedCard
          key={bed.id}
          bed={bed}
          selectedBed={selectedBed}
          setSelectedBed={setSelectedBed}
        />
      ))}
    </div>
  );
};

export default BedGrid;
