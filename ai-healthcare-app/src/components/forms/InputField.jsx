// import { Field, ErrorMessage } from "formik";

// const InputField = ({ label, name, type, placeholder, autoComplete }) => {
//   return (
//     <div>
//       <label htmlFor={name} className="block mb-2 font-medium">
//         {label}
//       </label>

//       <Field
//         id={name}
//         type={type}
//         name={name}
//         placeholder={placeholder}
//         autoComplete={autoComplete}
//         className="w-full border border-gray-300 p-3 rounded-lg outline-none focus:border-blue-500"
//       />

//       <ErrorMessage
//         name={name}
//         component="div"
//         className="text-red-500 text-sm mt-1"
//       />
//     </div>
//   );
// };

// export default InputField;
import { Field, ErrorMessage } from "formik";

const InputField = ({
  label,
  name,
  type,
  placeholder,
  autoComplete,
  min,
  value,
  as,
  rows,
  readOnly,
}) => {
  return (
    <div>
      <label htmlFor={name} className="block mb-2 font-medium">
        {label}
      </label>

      <Field
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        autoComplete={autoComplete}
        min={min}
        value={value}
        as={as}
        rows={rows}
        readOnly={readOnly}
        className="w-full border border-gray-300 p-3 rounded-lg outline-none focus:border-blue-500"
      />

      <ErrorMessage
        name={name}
        component="div"
        className="text-red-500 text-sm mt-1"
      />
    </div>
  );
};

export default InputField;