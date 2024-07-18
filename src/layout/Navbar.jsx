import Logo from "../images/logo.png";
import HeartOutline from "../images/heart-outline.png";
import Shopping from "../images/shopping.png";
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

const Navbar = () => {
  const openMenu = () => {
    const menu = document.querySelector(".menu-mb");
    menu.classList.add("active");
  };

  return (
    <div className="relative">
      <div className="w-[500px] h-screen fixed top-0 bottom-0 bg-white -translate-x-full menu-mb"></div>

      <header className="lg:hidden px-4 py-2 flex items-center justify-between">
        <i className="fa-solid fa-bars text-2xl" onClick={openMenu}></i>
        <img src={Logo} className="w-[60px] lg:w-[80px] object-cover" alt="" />
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-x-1">
            <img className="w-6 h-6 aspect-square" src={Shopping} alt="" />
          </div>
        </div>
      </header>
      <header className="px-[34px]  mt-4 items-center hidden lg:flex">
        <div className="flex-1 h-[80px] flex items-center border-b border-t border-primary">
          <ul className="flex space-x-[50px]">
            {menuItems.map((item, index) => (
              <li className={`uppercase hover:text-[#C2996F] `} key={index}>
                {item?.title}
              </li>
            ))}
          </ul>
        </div>
        <img src={Logo} className="w-[160px] object-cover" alt="" />
        <div className="flex items-center justify-end flex-1 gap-[50px] border-b border-t border-primary h-[80px]">
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
          <img className="w-6 h-6 aspect-square" src={HeartOutline} alt="" />
          <div className="flex items-center gap-x-1">
            <img className="w-6 h-6 aspect-square" src={Shopping} alt="" />
            <span className="text-lg">(01)</span>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
