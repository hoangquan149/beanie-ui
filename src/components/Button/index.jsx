// eslint-disable-next-line react/prop-types
const Button = ({ title = "Submit", className = "" }) => {
  return (
    <button
      className={`mt-4 sm:mt-10 px-[46px] py-[20px] border border-primary font-semibold text-lg hover:bg-primary uppercase duration-200 hover:text-white text-primary rounded-[50px] ${className}`}
    >
      {title}
    </button>
  );
};

export default Button;
