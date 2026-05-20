import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Formik, Form } from "formik";
import Swal from "sweetalert2";
import { FaLock } from "react-icons/fa";
import InputField from "../../components/forms/InputField";
import PasswordField from "../../components/forms/PasswordField";
import Button from "../../components/Common/Button";
import forgotPasswordValidationSchema from "./ForgotPasswordValidation";

const ForgotPasswordPage = () => {
  const navigate = useNavigate();
  const [showNewPassword, setShowNewPassword] = useState(false);

  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // Submit

  const handleSubmit = (values) => {
    // Dummy Password Reset

    console.log(values);

    Swal.fire({
      icon: "success",
      title: "Password Reset Successful",
      text: "Please login with your new password",
      timer: 2000,
      showConfirmButton: false,
    });

    setTimeout(() => {
      navigate("/");
    }, 2000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-600 to-cyan-500 px-4">
      <div className="bg-white w-full max-w-md rounded-3xl shadow-2xl p-8">
        {/* Header */}
        <div className="text-center mb-8">
          <div
            className=" mx-auto mb-4 flex h-20 w-20 items-center  justify-center rounded-2xl bg-blue-100 text-3xl text-blue-600">
            <FaLock />
          </div>

          <h1
            className="
            text-3xl
            font-bold
            text-gray-800
          "
          >
            Reset Password
          </h1>

          <p
            className="
            mt-2
            text-sm
            text-gray-500
          "
          >
            Enter your email and new password
          </p>
        </div>

        {/* Form */}

        <Formik
          initialValues={{
            email: "",

            newPassword: "",

            confirmPassword: "",
          }}
          validationSchema={forgotPasswordValidationSchema}
          onSubmit={handleSubmit}
        >
          {({ isValid }) => (
            <Form
              className="
              flex
              flex-col
              gap-5
            "
            >
              {/* Email */}

              <InputField
                label="Email"
                type="email"
                name="email"
                placeholder="Enter Email"
                autoComplete="email"
              />

              {/* New Password */}

              <PasswordField
                label="New Password"
                name="newPassword"
                placeholder="Enter New Password"
                autoComplete="new-password"
                showPassword={showNewPassword}
                setShowPassword={setShowNewPassword}
              />

              {/* Confirm Password */}

              <PasswordField
                label="Confirm Password"
                name="confirmPassword"
                placeholder="Confirm Password"
                autoComplete="new-password"
                showPassword={showConfirmPassword}
                setShowPassword={setShowConfirmPassword}
              />

              {/* Button */}

              <Button
                type="submit"
                title="Reset Password"
                className="
                w-full
                rounded-2xl
                bg-gradient-to-r
                from-blue-600
                to-cyan-500
                py-4
                text-white
                font-semibold
              "
                disabled={!isValid}
              />
            </Form>
          )}
        </Formik>

        {/* Back Login */}

        <div className="mt-6 text-center">
          <button
            onClick={() => navigate("/")}
            className="
            text-blue-600
            text-sm
            font-semibold
            hover:underline">
        
            Back to Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
