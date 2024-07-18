// eslint-disable-next-line react/prop-types
const Link = ({ href, title = "view all", className = "" }) => {
  return (
    <a
      href={href || "#"}
      className={`text-lg w-fit border-b-2 inline-block border-[#D0D0D0] font-semibold  hover:text-[#C2996F] uppercase hover:-translate-y-1 cursor-pointer transition-all duration-150 ease-linear ${className}`}
    >
      {title}
    </a>
  );
};

export default Link;
