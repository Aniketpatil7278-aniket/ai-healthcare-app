// src/components/Admission/ConfirmationStep.jsx

import { useFormikContext } from "formik";

import Card from "../common/Card";

import wards from "../../data/wards";

const ConfirmationStep = () => {
  const { values } = useFormikContext();

  // Selected Ward Details
  const selectedWard = wards.find((ward) => ward.name === values.ward);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Admission Summary</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {/* Patient Details */}
        <Card title="Patient ID" value={values.patientId} />

        <Card title="Patient Name" value={values.patientName} />

        <Card title="Mobile Number" value={values.mobile} />

        {/* Admission Details */}
        <Card title="Admission Date" value={values.admissionDate} />

        <Card title="Admission Type" value={values.admissionType} />

        <Card title="Department" value={values.department} />

        <Card title="Doctor" value={values.doctor} />

        <Card title="Reason" value={values.reason} />

        <Card title="Symptoms" value={values.symptoms} />

        {/* Ward & Bed */}
        <Card title="Selected Ward" value={values.ward} />

        <Card title="Selected Bed" value={values.bed} />

        {/* Insurance */}
        <Card title="Insurance Provider" value={values.insuranceProvider} />

        <Card title="Policy Number" value={values.policyNumber} />

        <Card title="Coverage Type" value={values.coverageType} />

        {/* Charges */}
        <Card
          title="Daily Charges"
          value={selectedWard ? `₹ ${selectedWard.charges}` : "N/A"}
        />

        <Card
          title="Assigned Nurse"
          value={selectedWard ? selectedWard.nurse : "N/A"}
        />
      </div>
    </div>
  );
};

export default ConfirmationStep;
