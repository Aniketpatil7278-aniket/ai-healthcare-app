// src/components/Discharge/DischargeForm.jsx

import InputField from "../forms/InputField";

const DischargeForm = () => {
  const today = new Date().toISOString().split("T")[0];

  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold mb-5">Discharge Details</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* Discharge Date */}
        <InputField
          label="Discharge Date"
          name="dischargeDate"
          type="date"
          min={today}
        />

        {/* Discharge Type */}
        <InputField
          label="Discharge Type"
          name="dischargeType"
          as="select"
          options={["Normal", "Emergency", "Transfer"]}
        />

        {/* Final Diagnosis */}
        <div className="md:col-span-2">
          <InputField
            label="Final Diagnosis"
            name="finalDiagnosis"
            as="textarea"
            rows={3}
            placeholder="Enter final diagnosis"
          />
        </div>

        {/* Treatment Summary */}
        <div className="md:col-span-2">
          <InputField
            label="Treatment Summary"
            name="treatmentSummary"
            as="textarea"
            rows={3}
            placeholder="Enter treatment summary"
          />
        </div>

        {/* Doctor Notes */}
        <div className="md:col-span-2">
          <InputField
            label="Doctor Notes"
            name="doctorNotes"
            as="textarea"
            rows={3}
            placeholder="Enter doctor notes"
          />
        </div>
      </div>
    </div>
  );
};

export default DischargeForm;
