import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import Swal from "sweetalert2";
import { useEffect, useState } from "react";

import { FaHeartbeat} from "react-icons/fa";

import InputField from "../../components/forms/InputField";
import PasswordField from "../../components/forms/PasswordField";
import Button from "../../components/common/Button";
import Loader from "../../components/common/Loader";

import loginValidationSchema from "./loginValidation";

import backgroundImg from "../../assets/backgroundimg.avif";

// import "./LoginPage.scss";

const LoginPage = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const { loading, isAuthenticated, error } = useSelector(
    (state) => state.auth,
  );

  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    if (isAuthenticated) {
      Swal.fire({
        icon: "success",
        title: "Login Successful",
        timer: 1500,
        showConfirmButton: false,
      });

      setTimeout(() => {
        navigate("/dashboard");
      }, 1500);
    }
  }, [isAuthenticated, navigate]);

  return (
    <div className="login-page relative min-h-screen overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={backgroundImg}
          alt="Healthcare"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/55 backdrop-blur-sm"></div>

      {/* Main Container */}
      <div className="relative z-10 grid min-h-screen grid-cols-2 p-8 lg:grid-cols-2 max-lg:grid-cols-1 max-lg:p-5">
        {/* LEFT SECTION */}
        <div className="flex flex-col justify-center p-16 text-white max-lg:hidden">
          {/* Brand */}
          <div className="mb-12 flex items-center gap-5">
            <div
              className="flex h-[70px] w-[70px] items-center justify-center rounded-[20px]
          bg-white/15 text-[32px] text-rose-500 backdrop-blur-xl"
            >
              <FaHeartbeat />
            </div>

            <div>
              <h1 className="text-4xl font-bold">AI Healthcare</h1>
              <p className="mt-1 text-gray-300">
                Smart Healthcare Management System
              </p>
            </div>
          </div>

          {/* Hero Content */}
          <div className="max-w-[550px]">
            <h2 className="text-[54px] font-bold leading-tight">
              Modern Healthcare <br /> Management Platform
            </h2>

            <p className="mt-5 text-lg leading-8 text-gray-300">
              Manage patients, appointments, medical records, and healthcare
              workflows securely with AI-powered technology.
            </p>
          </div>
        </div>

        {/* RIGHT SECTION */}
        <div className="flex items-center justify-center">
          <div
            className="w-full max-w-[500px] rounded-[32px] bg-white/90 p-12
        shadow-[0_20px_50px_rgba(0,0,0,0.25)] backdrop-blur-2xl
        max-sm:px-5 max-sm:py-8"
          >
            {/* Mobile Brand */}
            <div className="mb-8 hidden text-center max-lg:block">
              <div
                className="mx-auto mb-4 flex h-[70px] w-[70px]
            items-center justify-center rounded-[20px]
            bg-gradient-to-br from-blue-600 to-cyan-500
            text-[32px] text-white"
              >
                <FaHeartbeat />
              </div>

              <h2 className="text-[32px] font-bold text-blue-700">
                AI Healthcare
              </h2>
            </div>

            {/* Form Header */}
            {/* Form Header */}
            <div className="mb-9 text-center">
              {/* Logo */}
              <div
                className="mx-auto mb-5 flex h-[85px] w-[85px]
    items-center justify-center rounded-[24px]
    bg-gradient-to-br from-blue-600 to-cyan-500
    text-[40px] text-white shadow-lg"
              >
                <FaHeartbeat />
              </div>

              <h2 className="text-[38px] font-bold text-gray-900 max-sm:text-[28px]">
                Welcome Back
              </h2>

              <p className="mt-2 text-gray-500">Please login to continue</p>
            </div>

            {/* FORM */}
            <Formik
              initialValues={{
                email: "",
                password: "",
                rememberMe: false,
              }}
              validationSchema={loginValidationSchema}
              onSubmit={(values) => {
                dispatch({
                  type: "LOGIN_REQUEST",
                  payload: values,
                });
              }}
            >
              {({ isValid }) => (
                <Form className="flex flex-col gap-[22px]">
                  {/* Email */}
                  <InputField
                    label="Email"
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    autoComplete="email"
                  />

                  {/* Password */}
                  <PasswordField
                    label="Password"
                    name="password"
                    showPassword={showPassword}
                    setShowPassword={setShowPassword}
                  />

                  {/* Remember */}
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <label className="flex items-center gap-2.5 text-sm text-gray-700">
                      <Field
                        type="checkbox"
                        name="rememberMe"
                        className="h-4 w-4 accent-blue-600"
                      />

                      <span>Remember Me</span>
                    </label>

                    <button
                      type="button"
                      className="text-sm font-semibold text-blue-600 transition-all duration-300 hover:text-blue-700"
                    >
                      Forgot Password?
                    </button>
                  </div>

                  <ErrorMessage
                    name="rememberMe"
                    component="div"
                    className="text-sm text-red-500"
                  />

                  {/* Error */}
                  {error && (
                    <div
                      className="rounded-[14px] bg-red-100 p-3.5
                  text-center text-sm text-red-600"
                    >
                      {error}
                    </div>
                  )}

                  {/* Button */}
                  {loading ? (
                    <Loader />
                  ) : (
                    <Button
                      type="submit"
                      title="Login"
                      className="w-full rounded-2xl border-none
                  bg-gradient-to-br from-blue-600 to-cyan-500
                  py-4 text-lg font-semibold text-white
                  transition-all duration-300
                  hover:-translate-y-0.5
                  hover:shadow-[0_12px_30px_rgba(37,99,235,0.35)]
                  disabled:cursor-not-allowed disabled:opacity-60"
                      disabled={!isValid}
                    />
                  )}
                </Form>
              )}
            </Formik>

            {/* Footer */}
            <div className="mt-8 text-center text-[13px] text-gray-500">
              © 2026 AI Healthcare. All Rights Reserved.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
