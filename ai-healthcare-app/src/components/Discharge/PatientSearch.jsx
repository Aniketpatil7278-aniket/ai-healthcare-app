// src/components/Discharge/PatientSearch.jsx

import Button from "../common/Button";

const PatientSearch = ({ search, setSearch, handleSearch }) => {
  return (
    <div className="flex gap-4 mb-8">
      <input
        type="text"
        placeholder="Search by Patient ID / Name / Mobile"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="
          w-full
          border
          border-gray-300
          rounded-xl
          p-3
          outline-none
          focus:border-blue-500
        "
      />

      <Button title="Search" onClick={handleSearch} />
    </div>
  );
};

export default PatientSearch;
