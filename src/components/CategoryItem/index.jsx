/* eslint-disable react/prop-types */

// eslint-disable-next-line react/prop-types
const CategoryItem = ({ category }) => {
  return (
    <div className="">
      <img src={category?.image} className="rounded" alt={category?.image} />
      <div className="flex flex-col gap-y-1 mt-2">
        <p className="font-medium">{category?.title}</p>
        <p className="line-clamp-2 text-sm text-gray-600 italic text-ellipsis">
          {category?.description}
        </p>
        {/* <Link title="Shop Category" /> */}
      </div>
    </div>
  );
};

export default CategoryItem;
