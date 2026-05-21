// src/components/Admission/InsuranceStep.jsx

import InputField from "../forms/InputField";

const InsuranceStep = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Insurance Information</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* Insurance Provider */}
        <InputField
          label="Insurance Provider"
          name="insuranceProvider"
          type="text"
          placeholder="Enter Insurance Provider"
        />

        {/* Policy Number */}
        <InputField
          label="Policy Number"
          name="policyNumber"
          type="text"
          placeholder="Enter Policy Number"
        />

        {/* Coverage Type */}
        <InputField
          label="Coverage Type"
          name="coverageType"
          as="select"
          options={["Full", "Partial"]}
        />
      </div>
    </div>
  );
};

export default InsuranceStep;
