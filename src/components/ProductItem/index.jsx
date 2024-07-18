/* eslint-disable react/prop-types */
const ProductItem = ({ product }) => {
  return (
    <div className="flex flex-col gap-4">
      <img src={product?.image} alt="" />
      <div className="sm:text-[33px] flex flex-col gap-y-3 lg:gap-y-5 text-base">
        <p className=" ">{product?.name}</p>
        <p className="text-[#C2996F]">{product?.price}</p>
      </div>
    </div>
  );
};

export default ProductItem;
