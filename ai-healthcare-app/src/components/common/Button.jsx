
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
