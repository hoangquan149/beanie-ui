import Vector from "../../../images/vector.png";
import Vector2 from "../../../images/vector2.png";
import Vector3 from "../../../images/vector3.png";
import Vector4 from "../../../images/vector4.png";

const data = [
  {
    image: Vector,
    title: "Quick Delivery",
    description:
      "Purus pulvinar feugiat orci dictumst ellentesque ut sem partu rient.",
  },
  {
    image: Vector2,
    title: "Pickup in store",
    description:
      "Purus pulvinar feugiat orci dictumst ellentesque ut sem partu rient.",
  },
  {
    image: Vector3,
    title: "No shipping charge",
    description:
      "Purus pulvinar feugiat orci dictumst ellentesque ut sem partu rient.",
  },
  {
    image: Vector4,
    title: "Friendly Service",
    description:
      "Purus pulvinar feugiat orci dictumst ellentesque ut sem partu rient.",
  },
];

const Info = () => {
  return (
    <div className="py-[40px] px-5 xl:px-[76px]  border-y border-primary">
      <div className="grid grid-cols-1 md:justify-center md:grid-cols-2 xl:grid-cols-4 gap-5 xl:gap-3 w-full">
        {data.map((item, index) => (
          <div key={index} className="w-[322px] m-auto md:m-0 text-center">
            <img
              src={item.image}
              className="mb-[14px] w-[54px] h-[50px] mx-auto"
              alt=""
            />
            <p className="text-2xl text-primary">{item.title}</p>
            <p className="font-light text-primary mt-1">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Info;
