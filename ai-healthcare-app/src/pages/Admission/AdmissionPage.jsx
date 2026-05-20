// ==========================
// src/pages/Admission/AdmissionPage.jsx
// ==========================

import { useState } from "react";

import { Formik, Form } from "formik";

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

  const handleSubmit = (values) => {
    console.log(values);

    alert("Admission Confirmed Successfully");
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main className="flex-1 p-6">
        <Header />

        {/* Breadcrumb */}
        <div className="mb-6 text-gray-500">
          Dashboard &gt; Admission Management &gt; New Admission
        </div>

        {/* Stepper */}
        <Stepper step={step} />

        {/* Formik */}
        <Formik
          initialValues={initialValues}
          validationSchema={admissionValidationSchema}
          onSubmit={handleSubmit}
        >
          {() => (
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
                  {step > 1 && <Button title="Previous" onClick={prevStep} />}

                  {step < 4 ? (
                    <Button title="Next" onClick={nextStep} />
                  ) : (
                    <Button
                      type="submit"
                      title="Confirm Admission"
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
