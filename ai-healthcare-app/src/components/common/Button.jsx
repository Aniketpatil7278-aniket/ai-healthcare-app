const Button = ({ title, type = "button", onClick, className }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-lg ${className}`}
    >
      {title}
    </button>
  );
};

export default Button;
