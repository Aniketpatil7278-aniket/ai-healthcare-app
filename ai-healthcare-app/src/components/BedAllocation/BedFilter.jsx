// src/components/BedAllocation/BedFilter.jsx

const BedFilter = ({ search, setSearch }) => {
  return (
    <div className="bg-white p-5 rounded-2xl shadow">
      <input
        type="text"
        placeholder="Search Bed Number..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full border border-gray-300 p-3 rounded-lg outline-none focus:border-blue-500"
      />
    </div>
  );
};

export default BedFilter;
