import CategoryItem from "../../../components/CategoryItem";
import Link from "../../../components/Link";
import Title from "../../../components/Title";
import Product4 from "../../../images/product4.png";
import Product5 from "../../../images/product5.png";
import Product6 from "../../../images/product6.png";
import Product7 from "../../../images/product7.png";

const categories = [
  {
    title: "Instant Coffees",
    description:
      "Euismod eget id posuere nisl ut me duis in lectus elementum tincidunt augue ut neger in tincidunt amet et ultrices.",
    image: Product4,
  },
  {
    title: "Coffee Makers",
    description:
      "Euismod eget id posuere nisl ut me duis in lectus elementum tincidunt augue ut neger in tincidunt amet et ultrices.",
    image: Product5,
  },
  {
    title: "Coffee Accessories",
    description:
      "Euismod eget id posuere nisl ut me duis in lectus elementum tincidunt augue ut neger in tincidunt amet et ultrices.",
    image: Product6,
  },
  {
    title: "Coffee Gift Sets",
    description:
      "Euismod eget id posuere nisl ut me duis in lectus elementum tincidunt augue ut neger in tincidunt amet et ultrices.",
    image: Product7,
  },
];

const Category = () => {
  return (
    <div>
      {/* device mobile , tablet */}
      <div className="px-4 xl:hidden md:hidden">
        <Title className="mb-3">Shop Category</Title>
        <div className="grid grid-cols-2 gap-3 ">
          {categories.map((category, index) => (
            <CategoryItem category={category} key={index} />
          ))}
        </div>
      </div>
      {/* web */}
      <div className="xl:grid grid-cols-2 px-[76px] hidden">
        <div className="flex flex-1">
          <img className="w-[447px] flex-1" src={Product4} alt="" />
          <div className="p-[15px]">
            <div className="border border-[#D2CFCC] h-full flex py-[121px] items-center justify-center text-center flex-col px-[38px]">
              <div className="w-[340px]">
                <p className="text-2xl text-primary">Instant Coffees</p>
                <p className="my-3 font-light text-base">
                  Euismod eget id posuere nisl ut me duis in lectus elementum
                  tincidunt augue ut neger in tincidunt amet et ultrices.
                </p>
                <Link title="shop category" />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-1">
          <img className="w-[447px] flex-1" src={Product5} alt="" />
          <div className="p-[15px]">
            <div className="border border-[#D2CFCC] h-full flex py-[121px] items-center justify-center text-center flex-col px-[38px]">
              <div className="w-[340px]">
                <p className="text-2xl text-primary">Instant Coffees</p>
                <p className="my-3 font-light text-base">
                  Euismod eget id posuere nisl ut me duis in lectus elementum
                  tincidunt augue ut neger in tincidunt amet et ultrices.
                </p>
                <Link title="shop category" />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-1">
          <div className="p-[15px]">
            <div className="border border-[#D2CFCC] h-full flex py-[121px] items-center justify-center text-center flex-col px-[38px]">
              <div className="w-[340px]">
                <p className="text-2xl text-primary">Instant Coffees</p>
                <p className="my-3 font-light text-base">
                  Euismod eget id posuere nisl ut me duis in lectus elementum
                  tincidunt augue ut neger in tincidunt amet et ultrices.
                </p>
                <Link title="shop category" />
              </div>
            </div>
          </div>
          <img className="w-[447px] flex-1" src={Product6} alt="" />
        </div>
        <div className="flex flex-1">
          <div className="p-[15px]">
            <div className="border border-[#D2CFCC] h-full flex py-[121px] items-center justify-center text-center flex-col px-[38px]">
              <div className="w-[340px]">
                <p className="text-2xl text-primary">Instant Coffees</p>
                <p className="my-3 font-light text-base">
                  Euismod eget id posuere nisl ut me duis in lectus elementum
                  tincidunt augue ut neger in tincidunt amet et ultrices.
                </p>
                <Link title="shop category" />
              </div>
            </div>
          </div>
          <img className="w-[447px] flex-1" src={Product7} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Category;
