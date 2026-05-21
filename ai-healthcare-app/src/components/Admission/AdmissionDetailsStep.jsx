// src/components/Admission/AdmissionDetailsStep.jsx

import { useEffect } from "react";
import { useFormikContext } from "formik";

import InputField from "../forms/InputField";
import doctors from "../../data/doctors";


const DepartmentField = () => {
  const { values, setFieldValue } = useFormikContext();

  useEffect(() => {
    const selectedDoctor = doctors.find((doc) => doc.name === values.doctor);

    if (selectedDoctor) {
      setFieldValue("department", selectedDoctor.department);
    }
  }, [values.doctor, setFieldValue]);

  return (
    <InputField
      label="Department"
      name="department"
      type="text"
      readOnly={true}
      placeholder="Department"
    />
  );
};

const AdmissionDetailsStep = () => {
  // Current Date
  const today = new Date().toISOString().split("T")[0];

  return (
    <div>
      {/* Heading */}
      <h2 className="mb-6 text-2xl font-bold">Admission Details</h2>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        {/* Admission Date */}
        <InputField
          label="Admission Date"
          name="admissionDate"
          type="date"
          min={today}
        />

        {/* Admission Type */}
        <InputField
          label="Admission Type"
          name="admissionType"
          as="select"
          options={["Emergency", "General", "ICU"]}
        />

        {/* Referring Doctor */}
        <InputField
          label="Referring Doctor"
          name="doctor"
          as="select"
          options={doctors}
        />

        {/* Department */}
        <DepartmentField />

        {/* Reason for Admission */}
        <div className="md:col-span-2">
          <InputField
            label="Reason for Admission"
            name="reason"
            as="textarea"
            rows="3"
            placeholder="Enter Reason for Admission"
          />
        </div>

        {/* Symptoms */}
        <div className="md:col-span-2">
          <InputField
            label="Symptoms / Notes"
            name="symptoms"
            as="textarea"
            rows="3"
            placeholder="Enter Symptoms or Notes"
          />
        </div>
      </div>
    </div>
  );
};

export default AdmissionDetailsStep;
