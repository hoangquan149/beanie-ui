import Button from "../../../components/Button";
import BannerImage from "../../../images/banner.png";
import BannerImage2 from "../../../images/banner2.png";
import BannerImage3 from "../../../images/banner3.png";
import BannerImage4 from "../../../images/banner4.png";

const Banner = () => {
  return (
    <div>
      <div className="flex flex-col px-4 mt-5 xl:flex-row xl:px-[76px] xl:mt-[64px] ">
        <div className="sm:flex-1 h-fit">
          <img
            src={BannerImage}
            className="rounded-lg xl:rounded-none"
            alt=""
          />
        </div>
        <div className="sm:flex-1 h-fit relative">
          <img src={BannerImage2} alt="" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center flex-col w-full xl:w-[638px]">
            <span className="text-center text-[40px] md:text-[50px] xl:text-[65px] font-normal flex items-center gap-6 uppercase">
              <span className="">Special</span>
              <span className="text-yellow">coffee</span>
            </span>
            <p className="text-center mt-2.5 leading-[28px] md:leading-[38px] text-base md:text-xl font-light">
              Morbi justo vel diam non leo elementum massa. Molestie ipsum
              condimentum egestas vitae ut cras aenean enim. Laoreet odio
              adipiscing auctor scelerisque phasellus nisl faucibus.
            </p>
            <Button title="Order now" />
          </div>
        </div>
      </div>

      <div className="relative flex justify-center px-4 sm:px-0 items-center text-center py-[120px] xl:py-[200px]">
        <img
          src={BannerImage3}
          alt=""
          className="absolute left-0 top-0  xl:block w-[260px]"
        />
        <div className=" md:w-[520px] xl:w-[1164px] font-light text-lg md:text-2xl xl:text-[38px] text-primary md:leading-9 xl:leading-[68px] italic">
          Morbi justo vel diam non leo elementum massa. Molestie ipsum
          condimentum egestas vitae ut cras aenean enim. Laoreet odio adipiscing
          auctor scelerisque phasellus nisl faucibus.
        </div>
        <img
          src={BannerImage4}
          alt=""
          className="absolute right-0 top-[50px] md:top-[80px] xl:top-[150px]  xl:block w-[260px]"
        />
      </div>
    </div>
  );
};

export default Banner;
