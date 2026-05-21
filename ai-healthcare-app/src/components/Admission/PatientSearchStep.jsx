// ==========================
// src/components/Admission/PatientSearchStep.jsx
// ==========================

import { useEffect, useState } from "react";

import { useFormikContext } from "formik";

import InputField from "../forms/InputField";

import patientData from "../../data/patients";

import generatePatientId from "../../utils/generatePatientId";

import Button from "../common/Button";

const PatientSearchStep = () => {
  const { values, setFieldValue } = useFormikContext();

  const [searchValue, setSearchValue] = useState("");

  // Auto Generate Patient ID
  useEffect(() => {
    if (!values.patientId) {
      setFieldValue("patientId", generatePatientId());
    }
  }, [values.patientId, setFieldValue]);

  // Search Function
  const handleSearch = () => {
    if (!searchValue) return;

    const searchText = searchValue.toLowerCase();

    const existingPatient = patientData.find(
      (patient) =>
        patient.patientId.toLowerCase().includes(searchText) ||
        patient.name.toLowerCase().includes(searchText) ||
        patient.phone.includes(searchText),
    );

    if (existingPatient) {
      setFieldValue("patientId", existingPatient.patientId);

      setFieldValue("patientName", existingPatient.name);

      setFieldValue("mobile", existingPatient.phone);

      setFieldValue("doctor", existingPatient.doctor);
    } else {
      alert("Patient Not Found");
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Patient Search / Registration</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* Search Field */}
        <div className="md:col-span-2 flex gap-3">
          <input
            type="text"
            placeholder="Search by Patient ID, Name, or Phone Number"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            className="w-full border border-gray-300 p-3 rounded-lg outline-none focus:border-blue-500"
          />

          <Button title="Search" type="button" onClick={handleSearch} />
        </div>

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
