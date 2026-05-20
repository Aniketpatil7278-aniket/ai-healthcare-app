// ==========================
// src/components/Admission/PatientSearchStep.jsx
// ==========================

import InputField from "../forms/InputField";

const PatientSearchStep = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Patient Search / Registration</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* Patient ID */}
        <InputField
          label="Patient ID"
          name="patientId"
          type="text"
          placeholder="Enter Patient ID"
        />

        {/* Patient Name */}
        <InputField
          label="Patient Name"
          name="patientName"
          type="text"
          placeholder="Enter Patient Name"
        />

        {/* Mobile Number */}
        <InputField
          label="Mobile Number"
          name="mobile"
          type="text"
          placeholder="Enter Mobile Number"
        />
      </div>
    </div>
  );
};

export default PatientSearchStep;
