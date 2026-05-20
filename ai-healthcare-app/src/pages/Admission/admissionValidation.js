// src/pages/Admission/admissionValidation.js

import * as Yup from "yup";
const admissionValidationSchema = Yup.object({
  patientName: Yup.string()
    .min(2, "Name must be at least 2 characters")
    .max(25, "Name must be maximum 25 characters")
    .required("Patient Name is required"),

  mobile: Yup.string()
    .matches(/^[0-9]{10}$/, "Mobile number must be 10 digits")
    .required("Mobile Number is required"),

  admissionDate: Yup.string().required("Admission Date is required"),

  department: Yup.string().required("Department is required"),

  admissionType: Yup.string().required("Admission Type is required"),

  reason: Yup.string().required("Reason is required"),
});

export default admissionValidationSchema;
