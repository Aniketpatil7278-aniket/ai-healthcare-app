
// src/components/Admission/Stepper.jsx

const Stepper = ({ step }) => {
  const steps = ["Patient", "Admission", "Insurance", "Confirmation"];

  return (
    <div className="flex justify-between items-center">
      {steps.map((item, index) => (
        <div key={index} className="flex-1 text-center">
          <div
            className={`w-10 h-10 mx-auto rounded-full flex items-center justify-center text-white font-bold
            ${step >= index + 1 ? "bg-blue-600" : "bg-gray-300"}`}
          >
            {index + 1}
          </div>

          <p className="mt-2 text-sm font-medium">{item}</p>
        </div>
      ))}
    </div>
  );
};

export default Stepper;
