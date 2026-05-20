

// src/components/common/Card.jsx

const Card = ({ title, value }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm">
      
      {/* Title */}
      <h3 className="text-sm text-gray-500 mb-2">
        {title}
      </h3>

      {/* Value */}
      <p className="text-lg font-medium text-gray-900">
        {value || "-"}
      </p>

    </div>
  );
};

export default Card;