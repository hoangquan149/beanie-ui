const Footer = () => {
  return (
    <footer className="mt-[150px] ">
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-4 uppercase md:grid-cols-2 mb-4">
        <ul className="text-center flex flex-col gap-y-1 text-lg">
          <li className="hover:text-primary duration-200 hover:underline cursor-pointer">
            Home
          </li>
          <li className="hover:text-primary duration-200 hover:underline cursor-pointer">
            About
          </li>
          <li className="hover:text-primary duration-200 hover:underline cursor-pointer">
            About
          </li>
        </ul>
        <ul className="text-center flex flex-col gap-y-1 text-lg">
          <li>Shop single</li>
          <li className="hover:text-primary duration-200 hover:underline cursor-pointer">
            Blog
          </li>
          <li className="hover:text-primary duration-200 hover:underline cursor-pointer">
            Contact
          </li>
        </ul>
        <ul className="text-center flex flex-col gap-y-1 text-lg">
          <li className="hover:text-primary duration-200 hover:underline cursor-pointer">
            Terms & condition
          </li>
          <li className="hover:text-primary duration-200 hover:underline cursor-pointer">
            Services
          </li>
          <li className="hover:text-primary duration-200 hover:underline cursor-pointer">
            Privacy Policy
          </li>
        </ul>
        <ul className="text-center flex flex-col gap-y-1 text-lg">
          <li className="hover:text-primary duration-200 hover:underline cursor-pointer">
            Address, Location, 123
          </li>
          <li className="hover:text-primary duration-200 hover:underline cursor-pointer">
            yourinfo@gmail.com
          </li>
          <li className="hover:text-primary duration-200 hover:underline cursor-pointer">
            111 333 444 555
          </li>
        </ul>
      </div>
      <div className="text-center py-4 border-t border-primary">
        <span className="text-xs text-primary">
          © 2023 Beanie. Designed by{" "}
          <span className="underline font-light">TemplatesJungle</span>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
