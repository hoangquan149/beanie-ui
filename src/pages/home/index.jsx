import Banner from "./sections/Banner";
import Blog from "./sections/Blog";
import Category from "./sections/Category";
import Contact from "./sections/Contact";
import Feedback from "./sections/Feedback";
import HotProduct from "./sections/HotProduct";
import Info from "./sections/Info";
import Products from "./sections/Products";
import Social from "./sections/Social";

const HomePage = () => {
  return (
    <section>
      <Banner />
      <Products />
      <Feedback />
      <Category />
      <HotProduct />
      <Contact />
      <Info />
      <Blog />
      <Social />
    </section>
  );
};

export default HomePage;
