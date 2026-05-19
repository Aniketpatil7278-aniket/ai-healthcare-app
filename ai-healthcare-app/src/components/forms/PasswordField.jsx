import { Field, ErrorMessage } from "formik";

const PasswordField = ({ label, name, showPassword, setShowPassword }) => {
  return (
    <div>
      <label htmlFor={name} className="block mb-2 font-medium">
        {label}
      </label>

      <div className="relative">
        <Field
          id={name}
          type={showPassword ? "text" : "password"}
          name={name}
          placeholder="Enter Password"
          autoComplete="current-password"
          className="w-full border border-gray-300 p-3 rounded-lg outline-none focus:border-blue-500"
        />

        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-3 top-3 text-blue-500 text-sm"
        >
          {showPassword ? "Hide" : "Show"}
        </button>
      </div>

      <ErrorMessage
        name={name}
        component="div"
        className="text-red-500 text-sm mt-1"
      />
    </div>
  );
};

export default PasswordField;
