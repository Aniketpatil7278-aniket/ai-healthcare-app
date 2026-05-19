import * as Yup from "yup";

const forgotPasswordValidationSchema = Yup.object({
  // Email

  email: Yup.string().email("Invalid Email").required("Email is required"),

  // New Password

  newPassword: Yup.string()
    .min(6, "Minimum 6 characters")
    .required("New Password is required"),

  // Confirm Password

  confirmPassword: Yup.string()
    .oneOf([Yup.ref("newPassword")], "Passwords must match")
    .required("Confirm Password is required"),
});

export default forgotPasswordValidationSchema;
