// src/pages/Admission/admissionValidation.js

import * as Yup from "yup";
const admissionValidationSchema = Yup.object({
  patientName: Yup.string()
    .min(2, "Name must be at least 2 characters")
    .max(25, "Name must be maximum 25 characters")
    .required("Patient Name is required"),

  mobile: Yup.string()
    .matches(/^[6-9]\d{9}$/, "Enter valid mobile number")
    .required("Mobile number is required"),

  admissionDate: Yup.string().required("Admission Date is required"),

  doctor: Yup.string().required("Referring Doctor is required"),

  department: Yup.string().required("Department is required"),

  admissionType: Yup.string().required("Admission Type is required"),

  reason: Yup.string().required("Reason is required"),
});

export default admissionValidationSchema;
