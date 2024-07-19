import Link from "../../../components/Link";
import ProductItem from "../../../components/ProductItem";
import SliderCommon from "../../../components/Slider";
import Product1 from "../../../images/product1.png";
import Product2 from "../../../images/product2.png";
import Product3 from "../../../images/product3.png";

const products = [
  {
    name: "Caramelicious",
    price: "$29.00",
    image: Product1,
  },
  {
    name: "Hazelnut Heaven",
    price: "$29.00",
    image: Product2,
  },
  {
    name: "Maple Magic",
    price: "$29.00",
    image: Product3,
  },
  {
    name: "Caramelicious",
    price: "$29.00",
    image: Product1,
  },
  {
    name: "Hazelnut Heaven",
    price: "$29.00",
    image: Product2,
  },
  {
    name: "Maple Magic",
    price: "$29.00",
    image: Product3,
  },
  {
    name: "Caramelicious",
    price: "$29.00",
    image: Product1,
  },
  {
    name: "Hazelnut Heaven",
    price: "$29.00",
    image: Product2,
  },
  {
    name: "Maple Magic",
    price: "$29.00",
    image: Product3,
  },
];

const Products = () => {
  return (
    <div className="mt-4 px-4 lg:px-[76px]">
      <SliderCommon totalItem={products.length}>
        {products.map((product, index) => (
          <ProductItem product={product} key={index} />
        ))}
      </SliderCommon>
      <div className="sm:hidden mt-5 flex justify-center">
        <Link title="view all" />
      </div>
    </div>
  );
};

export default Products;
