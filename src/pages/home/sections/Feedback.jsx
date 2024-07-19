import { useRef, useState } from "react";
import Slider from "react-slick";

const Feedback = () => {
  const sliderRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(1);
  const next = () => {
    sliderRef.current?.slickNext();
  };
  const previous = () => {
    sliderRef.current?.slickPrev();
  };
  var settings = {
    infinite: false,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (_, next) => setCurrentSlide(next + 1),
  };

  return (
    <div className="relative  py-[50px] lg:py-[200px] justify-center mt-4 mx-4 lg:m-0 items-center text-center overflow-hidden">
      <div className="hidden lg:block">
        <button
          className={`size-[99px] border rounded-full absolute left-[76px] -translate-y-1/2 top-1/2 z-10  ${
            currentSlide <= 1
              ? "border-[#AEAEAE] "
              : "bg-primary text-[#FAF9F8]"
          }`}
          onClick={previous}
        >
          <i className="fa-light fa-angle-left text-[30px]"></i>
        </button>
        <button
          className={`size-[99px] border rounded-full  absolute right-[76px] -translate-y-1/2 top-1/2 z-10 ${
            2 - currentSlide < 1
              ? "border-[#AEAEAE]"
              : "bg-primary text-[#FAF9F8]"
          }`}
          onClick={next}
        >
          <i className="fa-light fa-angle-right text-[30px]"></i>
        </button>
      </div>
      <div className="lg:w-[1164px] mx-auto">
        <Slider
          ref={(slider) => {
            sliderRef.current = slider;
          }}
          {...settings}
        >
          <div>
            <div className=" md:w-[520px] xl:w-[1164px] mx-auto font-light text-lg md:text-2xl xl:text-[38px] text-primary md:leading-9 xl:leading-[68px] italic">
              <div>
                Morbi justo vel diam non leo elementum massa. Molestie ipsum
                condimentum egestas vitae ut cras aenean enim. Laoreet odio
                adipiscing auctor scelerisque phasellus nisl faucibus.
              </div>
              <p className="mt-2 text-2xl">Sarah Anderson</p>
            </div>
          </div>
          <div>
            <div className=" md:w-[520px] xl:w-[1164px] mx-auto font-light text-lg md:text-2xl xl:text-[38px] text-primary md:leading-9 xl:leading-[68px] italic">
              <div>
                Morbi justo vel diam non leo elementum massa. Molestie ipsum
                condimentum egestas vitae ut cras aenean enim. Laoreet odio
                adipiscing auctor scelerisque phasellus nisl faucibus.
              </div>
              <p className="mt-2 text-2xl">Sarah Anderson</p>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Feedback;
