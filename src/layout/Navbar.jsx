import InputSearch from "../components/InputSearch";
import useGetScrollTop from "../hooks/useGetScrollTop";
import HeartOutline from "../images/heart-outline.png";
import Logo from "../images/logo.png";
import IconSearch from "../images/search.png";

const menuItems = [
  {
    title: "Home",
  },
  {
    title: "Shop",
  },
  {
    title: "Blog",
  },
  {
    title: "Pages",
  },
];

const HEIGHT_NAV_MOBILE = 71;

const Navbar = () => {
  const { scrollTop } = useGetScrollTop();

  let isFixed = false;
  if (scrollTop > HEIGHT_NAV_MOBILE) isFixed = true;

  return (
    <div className="relative">
      <header
        className={`xl:hidden 
        px-4 py-2  flex items-center justify-between duration-300 transition-all ${
          isFixed && "fixed  right-0 left-0 top-0 z-10 bg-[#faf9f8] shadow-xl"
        }`}
      >
        <input
          type="checkbox"
          className="nav--input"
          hidden
          id="nav-mobile-input"
        />
        <label htmlFor="nav-mobile-input" className="nav--overlay"></label>
        <label htmlFor="nav-mobile-input">
          <i className="fa-solid fa-bars text-2xl"></i>
        </label>

        <nav className="w-[280px] fixed top-0 bottom-0 left-0 -translate-x-full z-40 bg-white nav-bars">
          <div className="p-4 flex justify-between items-center">
            <div className="relative">
              <input
                className="rounded-[60px] placeholder:text-primary placeholder:italic placeholder:font-light py-2 px-5 border border-[#B4B3B2] outline-none "
                type="text"
                placeholder="Search here..."
              />
              <img
                src={IconSearch}
                className="absolute top-1/2 cursor-pointer -translate-y-1/2 right-4 w-6"
                alt=""
              />
            </div>
            <label htmlFor="nav-mobile-input">
              <i className="fa-regular fa-xmark text-3xl " />
            </label>
          </div>
          <div>
            <ul className="p-5">
              {menuItems.map((item, index) => (
                <li className="text-lg py-2" key={index}>
                  {item.title}
                </li>
              ))}
            </ul>
          </div>
        </nav>

        <img src={Logo} className="w-[60px] xl:w-[80px] object-cover" alt="" />
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-x-3">
            {/* <i className="fa-light fa-magnifying-glass text-2xl"></i> */}
            <i className="fa-light fa-bag-shopping text-2xl"></i>
          </div>
        </div>
      </header>
      <header className="xl:px-[76px] mt-4 items-center hidden xl:flex">
        <div className="flex-1 h-[80px] flex items-center border-b border-t border-primary">
          <ul className="flex space-x-[50px]">
            {menuItems.map((item, index) => (
              <li className={`uppercase hover:text-yellow `} key={index}>
                <a href="">{item?.title}</a>
              </li>
            ))}
          </ul>
        </div>
        <img src={Logo} className="w-[160px] object-cover" alt="" />
        <div className="flex items-center justify-end flex-1 gap-[50px] border-b border-t border-primary h-[80px]">
          <InputSearch />
          <img
            className="w-6 h-6 aspect-square cursor-pointer"
            src={HeartOutline}
            alt=""
          />
          <div className="flex items-center gap-x-1">
            <i className="fa-light fa-bag-shopping text-2xl"></i>
            <span className="text-lg">(01)</span>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
