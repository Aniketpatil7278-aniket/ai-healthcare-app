// src/pages/Discharge/dischargeValidation.js

import * as Yup from "yup";

const today = new Date();

today.setHours(0, 0, 0, 0);

const dischargeValidationSchema = Yup.object({
  dischargeDate: Yup.date()
    .min(today, "Discharge Date cannot be in the past")
    .required("Discharge Date is required"),

  dischargeType: Yup.string().required("Discharge Type is required"),

  finalDiagnosis: Yup.string()
    .min(5, "Final Diagnosis must be at least 5 characters")
    .max(200, "Final Diagnosis must be maximum 200 characters")
    .required("Final Diagnosis is required"),

  treatmentSummary: Yup.string()
    .min(10, "Treatment Summary must be at least 10 characters")
    .max(500, "Treatment Summary must be maximum 500 characters")
    .required("Treatment Summary is required"),
});

export default dischargeValidationSchema;
