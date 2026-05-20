// ==========================
// src/components/Admission/AdmissionDetailsStep.jsx
// ==========================

import { Field, ErrorMessage, useFormikContext } from "formik";

import { useEffect } from "react";

import InputField from "../forms/InputField";

import doctors from "../../data/doctors";

// Department Auto Fill Component
const DepartmentField = () => {
  const { values, setFieldValue } = useFormikContext();

  useEffect(() => {
    const selectedDoctor = doctors.find((doc) => doc.name === values.doctor);

    if (selectedDoctor) {
      setFieldValue("department", selectedDoctor.department);
    }
  }, [values.doctor, setFieldValue]);

  return (
    <div>
      <label className="block mb-2 font-medium">Department</label>

      <Field
        type="text"
        name="department"
        readOnly
        className="w-full border border-gray-300 p-3 rounded-lg bg-gray-100"
      />

      <ErrorMessage
        name="department"
        component="div"
        className="text-red-500 text-sm mt-1"
      />
    </div>
  );
};

const AdmissionDetailsStep = () => {
  // Current Date
  const today = new Date().toISOString().split("T")[0];

  return (
    <div>
      {/* Heading */}
      <h2 className="text-2xl font-bold mb-6">Admission Details</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* Admission Date */}
        <InputField
          label="Admission Date"
          name="admissionDate"
          type="date"
          min={today}
          value={today}
        />

        {/* Admission Type */}
        <div>
          <label className="block mb-2 font-medium">Admission Type</label>

          <Field
            as="select"
            name="admissionType"
            className="w-full border border-gray-300 p-3 rounded-lg outline-none focus:border-blue-500"
          >
            <option value="">Select Admission Type</option>

            <option value="Emergency">Emergency</option>

            <option value="General">General</option>

            <option value="ICU">ICU</option>
          </Field>

          <ErrorMessage
            name="admissionType"
            component="div"
            className="text-red-500 text-sm mt-1"
          />
        </div>

        {/* Referring Doctor */}
        <div>
          <label className="block mb-2 font-medium">Referring Doctor</label>

          <Field
            as="select"
            name="doctor"
            className="w-full border border-gray-300 p-3 rounded-lg outline-none focus:border-blue-500"
          >
            <option value="">Select Doctor</option>

            {doctors.map((doctor, index) => (
              <option key={index} value={doctor.name}>
                {doctor.name}
              </option>
            ))}
          </Field>

          <ErrorMessage
            name="doctor"
            component="div"
            className="text-red-500 text-sm mt-1"
          />
        </div>

        {/* Department */}
        <DepartmentField />

        {/* Reason */}
        <div className="md:col-span-2">
          <InputField
            label="Reason for Admission"
            name="reason"
            as="textarea"
            rows="3"
            placeholder="Enter Reason"
          />
        </div>

        {/* Symptoms */}
        <div className="md:col-span-2">
          <InputField
            label="Symptoms / Notes"
            name="symptoms"
            as="textarea"
            rows="3"
            placeholder="Enter Symptoms"
          />
        </div>
      </div>
    </div>
  );
};

export default AdmissionDetailsStep;
