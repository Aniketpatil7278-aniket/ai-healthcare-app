import { Field, ErrorMessage } from "formik";

const PasswordField = ({
  label,
  name,
  placeholder = "Enter Password",
  autoComplete = "current-password",
  showPassword,
  setShowPassword,
}) => {
  return (
    <div>
      {/* Label */}

      <label
        htmlFor={name}
        className="
        mb-2
        block
        font-medium
      "
      >
        {label}
      </label>

      {/* Input */}

      <div className="relative">
        <Field
          id={name}
          type={showPassword ? "text" : "password"}
          name={name}
          placeholder={placeholder}
          autoComplete={autoComplete}
          className="
          w-full
          rounded-lg
          border
          border-gray-300
          p-3
          outline-none
          focus:border-blue-500
        "
        />

        {/* Toggle Button */}

        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="
          absolute
          right-3
          top-3
          text-sm
          text-blue-500
        "
        >
          {showPassword ? "Hide" : "Show"}
        </button>
      </div>

      {/* Error Message */}

      <ErrorMessage
        name={name}
        component="div"
        className="
        mt-1
        text-sm
        text-red-500
      "
      />
    </div>
  );
};

export default PasswordField;
