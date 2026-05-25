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

  dob: Yup.string().required("Date of Birth is required"),

  age: Yup.number()
    .min(1, "Minimum age is 1")
    .max(120, "Maximum age is 120")
    .required("Age is required"),

  address: Yup.string()
    .min(10, "Address must be at least 10 characters")
    .max(200, "Address must be maximum 200 characters")
    .required("Address is required"),

  gender: Yup.string().required("Gender is required"),

  admissionDate: Yup.string().required("Admission Date is required"),

  doctor: Yup.string().required("Referring Doctor is required"),

  department: Yup.string().required("Department is required"),

  ward: Yup.string().required("Ward is required"),

  bed: Yup.string().required("Bed is required"),

  admissionType: Yup.string().required("Admission Type is required"),

  reason: Yup.string().required("Reason is required"),

  // Insurance Fields
  insuranceProvider: Yup.string()
    .min(2, "Insurance Provider must be at least 2 characters")
    .max(50, "Insurance Provider must be maximum 50 characters")
    .required("Insurance Provider is required"),

  policyNumber: Yup.string()
    .matches(
      /^[A-Za-z0-9-]+$/,
      "Policy Number can contain only letters, numbers, and hyphen",
    )
    .min(5, "Policy Number must be at least 5 characters")
    .max(30, "Policy Number must be maximum 30 characters")
    .required("Policy Number is required (Example :TAR-2025-1001)"),
});

export default admissionValidationSchema;
