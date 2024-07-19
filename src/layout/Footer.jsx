const Footer = () => {
  return (
    <footer className="mt-[150px] ">
      <div className="grid grid-cols-1 gap-5 xl:grid-cols-4 uppercase md:grid-cols-2 mb-4">
        <ul className="text-center flex flex-col gap-y-1 text-lg">
          <li className="text-primary duration-200 hover:underline cursor-pointer hover:text-yellow">
            Home
          </li>
          <li className="text-primary duration-200 hover:underline cursor-pointer hover:text-yellow">
            About
          </li>
          <li className="text-primary duration-200 hover:underline cursor-pointer hover:text-yellow">
            About
          </li>
        </ul>
        <ul className="text-center flex flex-col gap-y-1 text-lg">
          <li>Shop single</li>
          <li className="text-primary duration-200 hover:underline cursor-pointer hover:text-yellow">
            Blog
          </li>
          <li className="text-primary duration-200 hover:underline cursor-pointer hover:text-yellow">
            Contact
          </li>
        </ul>
        <ul className="text-center flex flex-col gap-y-1 text-lg">
          <li className="text-primary duration-200 hover:underline cursor-pointer hover:text-yellow">
            Terms & condition
          </li>
          <li className="text-primary duration-200 hover:underline cursor-pointer hover:text-yellow">
            Services
          </li>
          <li className="text-primary duration-200 hover:underline cursor-pointer hover:text-yellow">
            Privacy Policy
          </li>
        </ul>
        <ul className="text-center flex flex-col gap-y-1 text-lg">
          <li className="text-primary duration-200 hover:underline cursor-pointer hover:text-yellow">
            Address, Location, 123
          </li>
          <li className="text-primary duration-200 hover:underline cursor-pointer hover:text-yellow">
            yourinfo@gmail.com
          </li>
          <li className="text-primary duration-200 hover:underline cursor-pointer hover:text-yellow">
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
