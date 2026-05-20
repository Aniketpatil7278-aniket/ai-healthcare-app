// ==========================
// src/components/Admission/ConfirmationStep.jsx
// ==========================

import { useFormikContext } from "formik";

import Card from "../common/Card";

const ConfirmationStep = () => {
  const { values } = useFormikContext();

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Admission Summary</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <Card title="Patient Name" value={values.patientName} />

        <Card title="Mobile Number" value={values.mobile} />

        <Card title="Admission Date" value={values.admissionDate} />

        <Card title="Admission Type" value={values.admissionType} />

        <Card title="Department" value={values.department} />

        <Card title="Doctor" value={values.doctor} />

        <Card title="Reason" value={values.reason} />

        <Card title="Symptoms" value={values.symptoms} />

        <Card title="Insurance Provider" value={values.insuranceProvider} />

        <Card title="Policy Number" value={values.policyNumber} />

        <Card title="Coverage Type" value={values.coverageType} />
      </div>
    </div>
  );
};

export default ConfirmationStep;
