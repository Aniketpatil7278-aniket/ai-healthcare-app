// src/pages/Discharge/DischargePage.jsx

import { useState } from "react";

import { Formik, Form } from "formik";

import Swal from "sweetalert2";

import Sidebar from "../../components/Sidebar/Sidebar";
import Header from "../../components/Header/Header";

import patients from "../../data/patients";
import wards from "../../data/wards";

import Button from "../../components/common/Button";

import PatientSearch from "../../components/Discharge/PatientSearch";
import PatientSummary from "../../components/Discharge/PatientSummary";
import DischargeForm from "../../components/Discharge/DischargeForm";
import BillingSummary from "../../components/Discharge/BillingSummary";

import dischargeValidationSchema from "./dischargeValidation";

const initialValues = {
  dischargeDate: "",
  dischargeType: "",
  finalDiagnosis: "",
  treatmentSummary: "",
  doctorNotes: "",
};

const DischargePage = () => {
  const user = JSON.parse(sessionStorage.getItem("user"));

  const [search, setSearch] = useState("");

  const [selectedPatient, setSelectedPatient] = useState(null);

  // Search Patient
  const handleSearch = () => {
    const searchText = search.toLowerCase();

    const patient = patients.find(
      (item) =>
        item.patientId.toLowerCase().includes(searchText) ||
        item.name.toLowerCase().includes(searchText) ||
        item.phone.includes(searchText),
    );

    if (patient) {
      setSelectedPatient(patient);

      Swal.fire({
        icon: "success",
        title: "Patient Found",
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

  // Charges
  const wardData = wards.find((ward) => ward.name === selectedPatient?.room);

  const wardCharges = wardData?.charges || 0;

  const medicineCharges = 2500;

  const doctorCharges = 4000;

  const testCharges = 3000;

  const totalCharges =
    wardCharges + medicineCharges + doctorCharges + testCharges;

  // Submit
  const handleSubmit = async (values, { resetForm }) => {
    await Swal.fire({
      icon: "success",
      title: "Patient Discharged",
      text: "Patient discharged successfully",
      confirmButtonColor: "#16a34a",
    });

    resetForm();

    setSelectedPatient(null);

    setSearch("");
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />

      <main className="flex-1 p-6">
        <Header user={user} />

        {/* Breadcrumb */}
        <div className="mb-6 text-gray-500">
          Dashboard &gt; Discharge Management
        </div>

        <div className="bg-white rounded-2xl shadow p-6">
          <h1 className="text-3xl font-bold text-blue-700 mb-6">
            Patient Discharge
          </h1>

          {/* Search */}
          <PatientSearch
            search={search}
            setSearch={setSearch}
            handleSearch={handleSearch}
          />

          {selectedPatient && (
            <Formik
              initialValues={initialValues}
              validationSchema={dischargeValidationSchema}
              onSubmit={handleSubmit}
            >
              {() => (
                <Form>
                  {/* Patient Summary */}
                  <PatientSummary patient={selectedPatient} />

                  {/* Discharge Form */}
                  <DischargeForm />

                  {/* Billing */}
                  <BillingSummary
                    wardCharges={wardCharges}
                    medicineCharges={medicineCharges}
                    doctorCharges={doctorCharges}
                    testCharges={testCharges}
                    totalCharges={totalCharges}
                  />

                  {/* Buttons */}
                  <div className="flex gap-4">
                    <Button
                      title="Confirm Discharge"
                      type="submit"
                      className="bg-green-600 hover:bg-green-700"
                    />

                    <Button
                      title="Cancel"
                      type="button"
                      onClick={() => {
                        setSelectedPatient(null);

                        setSearch("");
                      }}
                      className="bg-red-600 hover:bg-red-700"
                    />
                  </div>
                </Form>
              )}
            </Formik>
          )}
        </div>
      </main>
    </div>
  );
};

export default DischargePage;
