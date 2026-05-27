// src/components/Admission/PatientSearchStep.jsx

import { useEffect, useState } from "react";

import { useFormikContext } from "formik";

import Swal from "sweetalert2";

import InputField from "../forms/InputField";

import Button from "../common/Button";

import patientData from "../../data/patients";

import generatePatientId from "../../utils/generatePatientId";

import calculateAge from "../../utils/calculateAge";

const PatientSearchStep = () => {
  const { values, setFieldValue } = useFormikContext();

  const [searchValue, setSearchValue] = useState("");

  // Auto Generate Patient ID
  useEffect(() => {
    if (!values.patientId) {
      setFieldValue("patientId", generatePatientId());
    }
  }, [values.patientId, setFieldValue]);

  // Auto Calculate Age from DOB
  useEffect(() => {
    if (values.dob) {
      const age = calculateAge(values.dob);

      setFieldValue("age", age);
    }
  }, [values.dob, setFieldValue]);

  // Search Function
  const handleSearch = () => {
    if (!searchValue) {
      Swal.fire({
        icon: "warning",
        title: "Search Required",
        text: "Please enter Patient ID, Name or Mobile Number",
        confirmButtonColor: "#f59e0b",
      });

      return;
    }

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

      setFieldValue("gender", existingPatient.gender);

      setFieldValue("dob", existingPatient.dob);

      setFieldValue("age", existingPatient.age);

      setFieldValue("address", existingPatient.address);

      Swal.fire({
        icon: "success",
        title: "Patient Data Found",
        text: "Patient data loaded successfully",
        confirmButtonColor: "#16a34a",
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Patient Not Found",
        text: "No patient record found",
        confirmButtonColor: "#dc2626",
      });
    }
  };

  return (
    <div>
      {/* Heading */}
      <h2 className="text-2xl font-bold mb-6">Patient Search / Registration</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* Search Field */}
        <div className="md:col-span-2 flex gap-3">
          <input
            type="text"
            placeholder="Search by Patient ID, Name, or Phone Number"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            className="
              w-full
              border
              border-gray-300
              p-3
              rounded-lg
              outline-none
              focus:border-blue-500
            "
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
          label="Patient Name *"
          name="patientName"
          type="text"
          placeholder="Enter Patient Name"
        />

        {/* Mobile Number */}
        <InputField
          label="Mobile Number *"
          name="mobile"
          type="text"
          placeholder="Enter Mobile Number"
        />

        {/* Gender */}
        <InputField
          label="Gender *"
          name="gender"
          as="select"
          options={["Male", "Female", "Other"]}
        />

        {/* DOB */}
        <InputField label="Date of Birth *" name="dob" type="date" />

        {/* Age */}
        <InputField
          label="Age *"
          name="age"
          type="number"
          readOnly={true}
          placeholder="Auto Calculated"
        />

        {/* Address */}
        <div className="md:col-span-2">
          <InputField
            label="Address *"
            name="address"
            as="textarea"
            rows="3"
            placeholder="Enter Address"
          />
        </div>
      </div>
    </div>
  );
};

export default PatientSearchStep;
