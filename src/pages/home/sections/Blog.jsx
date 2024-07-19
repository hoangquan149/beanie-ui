import Link from "../../../components/Link";
import Title from "../../../components/Title";
import Blog1 from "../../../images/blog1.png";
import Blog2 from "../../../images/blog2.png";
import Blog3 from "../../../images/blog3.png";

const Blog = () => {
  return (
    <div className="mt-[200px] px-4 lg:px-[76px]">
      <div className="flex items-center justify-between mb-5 lg:mb-[40px]">
        <Title>Read Our Blogs</Title>
        <Link title="Read Blog posts" className="hidden lg:block" />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        <div className="cursor-pointer">
          <img src={Blog1} className="lg:w-[576px] lg:h-[405px]" alt="" />
          <div className="mt-5">
            <p className="text-[24px] text-primary">What is the best Coffee?</p>
            <p className="text-base font-light text-primary mt-1.5">
              What is the best Coffee?
            </p>
          </div>
        </div>
        <div className="cursor-pointer">
          <img src={Blog2} className="lg:w-[576px] lg:h-[489px]" alt="" />
          <div className="mt-5">
            <p className="text-[24px] text-primary">What is the best Coffee?</p>
            <p className="text-base font-light text-primary mt-1.5">
              What is the best Coffee?
            </p>
          </div>
        </div>
        <div className="cursor-pointer">
          <img src={Blog3} className="lg:w-[576px] lg:h-[405px]" alt="" />
          <div className="mt-5">
            <p className="text-[24px] text-primary">What is the best Coffee?</p>
            <p className="text-base font-light text-primary mt-1.5">
              What is the best Coffee?
            </p>
          </div>
        </div>
      </div>
      <div className="text-center mt-5 lg:hidden">
        <Link title="Read Blog posts" className=" " />
      </div>
    </div>
  );
};

export default Blog;
