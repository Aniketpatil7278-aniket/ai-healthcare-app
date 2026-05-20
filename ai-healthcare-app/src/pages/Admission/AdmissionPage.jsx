// ==========================
// src/pages/Admission/AdmissionPage.jsx
// ==========================

import { useState } from "react";

import { Formik, Form } from "formik";

import Swal from "sweetalert2";

import Sidebar from "../../components/Sidebar/Sidebar";
import Header from "../../components/Header/Header";

import Stepper from "../../components/Admission/Stepper";
import PatientSearchStep from "../../components/Admission/PatientSearchStep";
import AdmissionDetailsStep from "../../components/Admission/AdmissionDetailsStep";
import InsuranceStep from "../../components/Admission/InsuranceStep";
import ConfirmationStep from "../../components/Admission/ConfirmationStep";
import admissionValidationSchema from "../Admission/admissionValidation";
import Button from "../../components/common/Button";


const AdmissionPage = () => {
  const user = JSON.parse(sessionStorage.getItem("user"));

  const [step, setStep] = useState(1);

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
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

  // Confirmation Popup after clicking Submit
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

  // Final Success
  if (result.isConfirmed) {
    await Swal.fire({
      title: "Admission Confirmed!",
      text: "Patient admission completed successfully.",
      icon: "success",
      confirmButtonText: "OK",
      confirmButtonColor: "#16a34a",
    });

    resetForm();
    setStep(1);
  }
};
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main className="flex-1 p-6">
        <Header user={user} />

        {/* Breadcrumb */}
        <div className="mb-6 text-gray-500">
          Dashboard &gt; Admission Management &gt; New Admission
        </div>

        {/* Stepper */}
        <Stepper step={step} />

        {/* Formik */}
        {/* Formik */}
        <Formik
          initialValues={initialValues}
          validationSchema={admissionValidationSchema}
          onSubmit={handleSubmit}
        >
          {({ validateForm, setTouched }) => (
            <Form>
              <div className="bg-white rounded-2xl shadow p-6 mt-6">
                {/* Step 1 */}
                {step === 1 && <PatientSearchStep />}

                {/* Step 2 */}
                {step === 2 && <AdmissionDetailsStep />}

                {/* Step 3 */}
                {step === 3 && <InsuranceStep />}

                {/* Step 4 */}
                {step === 4 && <ConfirmationStep />}

                {/* Buttons */}
                <div className="flex justify-between mt-8">
                  {/* Previous */}
                  {step > 1 && (
                    <Button title="Previous" type="button" onClick={prevStep} />
                  )}

                  {/* Next */}
                  {step < 4 ? (
                    <Button
                      title="Next"
                      type="button"
                      onClick={async () => {
                        const errors = await validateForm();

                        // STEP 1 Validation
                        if (step === 1) {
                          setTouched({
                            patientName: true,
                            mobile: true,
                          });

                          if (errors.patientName || errors.mobile) {
                            return;
                          }
                        }

                        // STEP 2 Validation
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
            </Form>
          )}
        </Formik>
      </main>
    </div>
  );
};

export default AdmissionPage;
