import IconSearch from "../../images/search.png";

// eslint-disable-next-line react/prop-types
const InputSearch = ({ className = "" }) => {
  return (
    <div className={`relative w-fit`}>
      <input
        className={`rounded-[60px] placeholder:text-primary placeholder:italic placeholder:font-light py-2 px-5 border border-[#B4B3B2] outline-none ${className}`}
        type="text"
        placeholder="Search here..."
      />
      <img
        src={IconSearch}
        className="absolute top-1/2 cursor-pointer -translate-y-1/2 right-4 w-6"
        alt=""
      />
    </div>
  );
};

export default InputSearch;
