import * as Yup from "yup";

const loginValidationSchema = Yup.object({
  email: Yup.string().email("Invalid Email").required("Email is required"),

  password: Yup.string()
    .min(6, "Minimum 6 Characters")
    .required("Password is required"),

  rememberMe: Yup.boolean().oneOf(
    [true],
    "Please check the Remember Me checkbox",
  ),
  
});

export default loginValidationSchema;
