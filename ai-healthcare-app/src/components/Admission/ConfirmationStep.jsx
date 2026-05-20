// ==========================
// src/components/Admission/ConfirmationStep.jsx
// ==========================

import Card from "../Common/Card";

const ConfirmationStep = ({ formData }) => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Admission Summary</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <Card title="Patient Name" value={formData.patientName} />

        <Card title="Mobile Number" value={formData.mobile} />

        <Card title="Admission Type" value={formData.admissionType} />

        <Card title="Department" value={formData.department} />

        <Card title="Doctor" value={formData.doctor} />

        <Card title="Insurance" value={formData.insuranceProvider} />
      </div>
    </div>
  );
};

export default ConfirmationStep;
