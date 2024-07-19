/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
const ProductHotItem = ({ product }) => {
  return (
    <>
      {" "}
      <div className="flex items-center gap-2">
        <img
          src={product?.image}
          alt=""
          className="rounded-full w-[80px] h-[80px] xl:w-[90px] xl:h-[90px]"
        />
        <div className="flex-1 flex flex-col gap-y-2">
          <div className="flex">
            <p className="text-xl text-primary">{product?.name}</p>
            <div className="border-b border-dashed border-[#D2CFCC] flex-1"></div>
            <p className="text-primary">{product?.price}</p>
          </div>
          <p className="text-primary font-light text-base line-clamp-2 text-ellipsis">
            {product?.description}
          </p>
        </div>
      </div>
    </>
  );
};

export default ProductHotItem;
