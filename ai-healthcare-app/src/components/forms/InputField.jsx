
import { Field, ErrorMessage } from "formik";

const InputField = ({
  label,
  name,
  type = "text",
  placeholder,
  autoComplete,
  as,
  options = [],
  rows,
  readOnly = false,
  min,
  onChange,
}) => {
  return (
    <div>
      {/* Label */}
      <label htmlFor={name} className="block mb-2 font-medium">
        {label}
      </label>

      {/* Select */}
      {as === "select" ? (
        <Field
          as="select"
          name={name}
          className="w-full border border-gray-300 p-3 rounded-lg outline-none focus:border-blue-500"
        >
          <option value="">Select {label}</option>

          {options.map((option, index) => (
            <option
              key={index}
              value={typeof option === "object" ? option.name : option}
            >
              {typeof option === "object" ? option.name : option}
            </option>
          ))}
        </Field>
      ) : as === "textarea" ? (
        /* Textarea */
        <Field
          as="textarea"
          name={name}
          rows={rows}
          placeholder={placeholder}
          className="w-full border border-gray-300 p-3 rounded-lg outline-none focus:border-blue-500"
        />
      ) : (
        /* Input */
        <Field name={name}>
          {({ field, form }) => (
            <input
              {...field}
              id={name}
              type={type}
              placeholder={placeholder}
              autoComplete={autoComplete}
              readOnly={readOnly}
              min={min}
              className="w-full border border-gray-300 p-3 rounded-lg outline-none focus:border-blue-500"
              onChange={(e) => {
                field.onChange(e);

                if (onChange) {
                  onChange(e, form);
                }
              }}
            />
          )}
        </Field>
      )}

      {/* Error */}
      <ErrorMessage
        name={name}
        component="div"
        className="text-red-500 text-sm mt-1"
      />
    </div>
  );
};

export default InputField;