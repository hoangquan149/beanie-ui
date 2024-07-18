// eslint-disable-next-line react/prop-types
const Title = ({ children, className = "" }) => {
  return (
    <h5
      className={`font-medium text-2xl lg:text-[60px] text-primary uppercase ${className}`}
    >
      {children}
    </h5>
  );
};

export default Title;
