
const Button = ({
  title,
  type = "button",
  onClick,
  className = "",
  disabled = false,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`
        bg-blue-600
        hover:bg-blue-700
        text-white
        px-5
        py-3
        rounded-lg
        transition-all
        duration-300
        disabled:opacity-50
        disabled:cursor-not-allowed
        ${className}
      `}
    >
      {title}
    </button>
  );
};

export default Button;

//src/components/Common/Button.jsx

// import Button from "@mui/material/Button";

// const CustomButton = ({
//   title,
//   type = "button",
//   onClick,
//   className = "",
//   disabled = false,
//   variant = "contained",
//   color = "primary",
// }) => {
//   return (
//     <Button
//       type={type}
//       onClick={onClick}
//       disabled={disabled}
//       variant={variant}
//       color={color}
//       className={className}
//       sx={{
//         px: 3,
//         py: 1.5,
//         borderRadius: "10px",
//         textTransform: "none",
//         fontWeight: 600,
//         boxShadow: "none",
//       }}
//     >
//       {title}
//     </Button>
//   );
// };

// export default CustomButton;