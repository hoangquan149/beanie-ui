import { useMemo, useRef, useState } from "react";
import Slider from "react-slick";
import Title from "../Title";

// eslint-disable-next-line react/prop-types
const SliderCommon = ({ children, totalItem, title = "shop Best coffee" }) => {
  const sliderRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(1);
  var settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,

    beforeChange: (_, next) => setCurrentSlide(next + 1),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToScroll: 2,
          slidesToShow: 2.5,
        },
      },
    ],
  };

  const next = () => {
    sliderRef.current?.slickNext();
  };
  const previous = () => {
    sliderRef.current?.slickPrev();
  };

  const currentBreakpoint = useMemo(
    () =>
      settings.responsive.find(
        (item) => item?.breakpoint === sliderRef?.current?.state?.breakpoint
      ),
    [settings.responsive]
  );

  return (
    <div className="slider-container px-4 overflow-hidden lg:px-0">
      <div className="flex justify-between items-center mb-[20px]">
        <Title className="">{title}</Title>
        <div className="flex items-center gap-3">
          <button
            disabled={currentSlide <= 1}
            className={`p-2 w-[46px] ${
              currentSlide <= 1 ? "bg-[#E9E9E9]" : "bg-primary text-white"
            }  rounded-[10px] `}
            onClick={previous}
          >
            <i className="fa-regular fa-angle-left text-2xl"></i>
          </button>
          <button
            className={`p-2 w-[46px] ${
              totalItem - currentSlide <
              currentBreakpoint?.settings?.slidesToScroll
                ? "bg-[#E9E9E9]"
                : "bg-primary text-white"
            }  rounded-[10px] `}
            onClick={next}
          >
            <i className="fa-regular fa-angle-right text-2xl"></i>
          </button>
        </div>
      </div>
      <Slider
        ref={(slider) => {
          sliderRef.current = slider;
        }}
        className={
          "[&_.slick-slide]:px-2 [&_.slick-list]:-mx-2 md:[&_.slick-slide]:px-[15.5px] md:[&_.slick-list]:-mx-[15.5px] [&_.slick-list]:my-0"
        }
        {...settings}
      >
        {children}
      </Slider>
    </div>
  );
};

export default SliderCommon;
