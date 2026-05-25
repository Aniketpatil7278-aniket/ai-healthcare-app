// src/components/Discharge/PatientSummary.jsx

import Card from "../common/Card";

const PatientSummary = ({ patient }) => {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold mb-5">Patient Summary</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <Card title="Patient ID" value={patient.patientId} />

        <Card title="Patient Name" value={patient.name} />

        <Card title="Age" value={patient.age} />

        <Card title="Gender" value={patient.gender} />

        <Card title="Doctor" value={patient.doctor} />

        <Card title="Ward" value={patient.room} />

        <Card title="Bed" value={patient.bed} />

        <Card title="Disease" value={patient.disease} />

        <Card title="Admission Date" value={patient.admissionDate} />
      </div>
    </div>
  );
};

export default PatientSummary;
