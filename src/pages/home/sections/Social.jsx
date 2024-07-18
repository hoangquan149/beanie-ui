import Ig1 from "../../../images/ig1.png";
import Ig2 from "../../../images/ig2.png";
import Ig3 from "../../../images/ig3.png";
import Ig4 from "../../../images/ig4.png";
import Ig5 from "../../../images/ig5.png";
import Ig6 from "../../../images/ig6.png";

const images = [
  {
    link: "",
    image: Ig1,
  },
  {
    link: "",
    image: Ig2,
  },
  {
    link: "",
    image: Ig3,
  },
  {
    link: "",
    image: Ig4,
  },
  {
    link: "",
    image: Ig5,
  },
  {
    link: "",
    image: Ig6,
  },
];

const Social = () => {
  return (
    <div className="mt-[100px] lg:mt-[200px] px-4 lg:px-[76px]">
      <h5 className="text-[34px] text-primary text-center uppercase leading-[42px]">
        Follow our INstagram #Beanie
      </h5>
      <div className="grid grid-cols-2 lg:grid-cols-6 gap-5 mt-5">
        {images.map((image, index) => (
          <a key={index} href={image.link}>
            <img src={image.image} className="lg:size-[278px]" alt="" />
          </a>
        ))}
      </div>
    </div>
  );
};

export default Social;
