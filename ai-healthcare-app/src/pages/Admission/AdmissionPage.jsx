
// src/pages/Admission/AdmissionPage.jsx

import { useState } from "react";
import { Formik, Form } from "formik";

import Swal from "sweetalert2";

import Sidebar from "../../components/Sidebar/Sidebar";
import Header from "../../components/Header/Header";
import Button from "../../components/common/Button";

import Stepper from "../../components/Admission/Stepper";
import PatientSearchStep from "../../components/Admission/PatientSearchStep";
import AdmissionDetailsStep from "../../components/Admission/AdmissionDetailsStep";
import InsuranceStep from "../../components/Admission/InsuranceStep";
import ConfirmationStep from "../../components/Admission/ConfirmationStep";

import admissionValidationSchema from "../Admission/admissionValidation";

const AdmissionPage = () => {
  const user = JSON.parse(sessionStorage.getItem("user"));

  const [step, setStep] = useState(1);

  // Step Navigation
  
  const nextStep = () => {
    setStep((prev) => prev + 1);
  };

  const prevStep = () => {
    setStep((prev) => prev - 1);
  };

  const initialValues = {
    patientId: "",
    patientName: "",
    mobile: "",

    admissionDate: "",
    admissionType: "",
    doctor: "",
    department: "",
    reason: "",
    symptoms: "",

    insuranceProvider: "",
    policyNumber: "",
    coverageType: "",
  };

  const handleSubmit = async (values, { resetForm }) => {
    console.log(values);

    const result = await Swal.fire({
      title: "Confirm Admission?",
      text: "Are you sure you want to submit this admission?",
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Yes, Submit",
      cancelButtonText: "Cancel",
      confirmButtonColor: "#16a34a",
      cancelButtonColor: "#dc2626",
      background: "#ffffff",
    });

    if (result.isConfirmed) {
      await Swal.fire({
        title: "Admission Confirmed!",
        text: "Patient admission completed successfully.",
        icon: "success",
        confirmButtonText: "OK",
        confirmButtonColor: "#16a34a",
      });

      resetForm();

      localStorage.removeItem("admissionDraft");

      setStep(1);
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main className="flex-1 p-6">
        {/* Header */}
        <Header user={user} />

        {/* Breadcrumb */}
        <div className="mb-6 text-gray-500">
          Dashboard &gt; Admission Management &gt; New Admission
        </div>

        {/* Stepper */}
        <Stepper step={step} />

        {/* Formik Form */}
        <Formik
          initialValues={initialValues}
          validationSchema={admissionValidationSchema}
          onSubmit={handleSubmit}
        >
          {({ validateForm, setTouched, resetForm }) => (
            <Form>
              <div className="bg-white rounded-2xl shadow p-6 mt-6">
  
                {step === 1 && <PatientSearchStep />}

                {step === 2 && <AdmissionDetailsStep />}

                {step === 3 && <InsuranceStep />}

                {step === 4 && <ConfirmationStep />}

  
                <div className="flex justify-between mt-8">
                  {/* Previous Button */}
                  {step > 1 ? (
                    <Button title="Previous" type="button" onClick={prevStep} />
                  ) : (
                    <div />
                  )}

                  {/* Right Side Buttons */}
                  <div className="flex gap-3">
                    {/* Cancel Button */}
                    <Button
                      title="Cancel"
                      type="button"
                      className="bg-red-500 hover:bg-red-600"
                      onClick={() => {
                        Swal.fire({
                          title: "Cancel Admission?",
                          text: "All entered data will be removed.",
                          icon: "warning",
                          showCancelButton: true,
                          confirmButtonText: "Yes, Cancel",
                          cancelButtonText: "No",
                          confirmButtonColor: "#dc2626",
                          cancelButtonColor: "#2563eb",
                        }).then((result) => {
                          if (result.isConfirmed) {
                            resetForm();

                            localStorage.removeItem("admissionDraft");

                            setStep(1);

                            Swal.fire({
                              icon: "success",
                              title: "Admission Cancelled",
                              confirmButtonColor: "#2563eb",
                            });
                          }
                        });
                      }}
                    />

                    {/* Next Button */}
                    {step < 4 ? (
                      <Button
                        title="Next"
                        type="button"
                        onClick={async () => {
                          const errors = await validateForm();

                          if (step === 1) {
                            setTouched({
                              patientName: true,
                              mobile: true,
                            });

                            if (errors.patientName || errors.mobile) {
                              return;
                            }
                          }

                          if (step === 2) {
                            setTouched({
                              admissionDate: true,
                              admissionType: true,
                              department: true,
                              doctor: true,
                              reason: true,
                            });

                            if (
                              errors.admissionDate ||
                              errors.admissionType ||
                              errors.department ||
                              errors.doctor ||
                              errors.reason
                            ) {
                              return;
                            }
                          }

                          nextStep();
                        }}
                      />
                    ) : (
                      <Button
                        type="submit"
                        title="Submit Admission"
                        className="bg-green-600 hover:bg-green-700"
                      />
                    )}
                  </div>
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </main>
    </div>
  );
};

export default AdmissionPage;
