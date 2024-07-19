import Link from "../../../components/Link";
import ProductHotItem from "../../../components/ProductHotItem";
import Title from "../../../components/Title";
import Product3 from "../../../images/product3.png";

const blocks = [
  {
    title: "New arrivals",
    products: [
      {
        name: "Coconut Kiss",
        price: "$29.00",
        image: Product3,
        description: "A strong and concentrated shot of coffee",
      },
      {
        name: "Coconut Kiss",
        price: "$29.00",
        image: Product3,
        description: "A strong and concentrated shot of coffee",
      },
      {
        name: "Coconut Kiss",
        price: "$29.00",
        image: Product3,
        description: "A strong and concentrated shot of coffee",
      },
      {
        name: "Coconut Kiss",
        price: "$29.00",
        image: Product3,
        description: "A strong and concentrated shot of coffee",
      },
      {
        name: "Coconut Kiss",
        price: "$29.00",
        image: Product3,
        description: "A strong and concentrated shot of coffee",
      },
    ],
  },
  {
    title: "Best Selling",
    products: [
      {
        name: "Coconut Kiss",
        price: "$29.00",
        image: Product3,
        description: "A strong and concentrated shot of coffee",
      },
      {
        name: "Coconut Kiss",
        price: "$29.00",
        image: Product3,
        description: "A strong and concentrated shot of coffee",
      },
      {
        name: "Coconut Kiss",
        price: "$29.00",
        image: Product3,
        description: "A strong and concentrated shot of coffee",
      },
      {
        name: "Coconut Kiss Kiss",
        price: "$29.00",
        image: Product3,
        description: "A strong and concentrated shot of coffee",
      },
      {
        name: "Coconut Kiss",
        price: "$29.00",
        image: Product3,
        description: "A strong and concentrated shot of coffee",
      },
    ],
  },
];

const HotProduct = () => {
  return (
    <div className="mt-[80px] lg:mt-[200px] lg:px-[76px] grid grid-cols-1 lg:gap-[140px] lg:grid-cols-2 md:grid-cols-2 px-4 gap-y-4">
      {blocks.map(({ title, products }, index) => (
        <div key={index}>
          <Title>{title}</Title>
          <div className="mt-5 lg:mt-[40px] flex flex-col lg:gap-y-[20px] gap-y-2">
            {products.map((product, index) => (
              <ProductHotItem product={product} key={index} />
            ))}
          </div>
          <div className="mt-4 text-center lg:text-start">
            <Link />
          </div>
        </div>
      ))}
    </div>
  );
};

export default HotProduct;
