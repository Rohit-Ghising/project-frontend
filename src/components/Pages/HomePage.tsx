import Categories from "../Home/Categories";
import DisplayProduct from "../Home/DisplayProduct";
import Footer from "../Home/Footer";
import HeroSection from "../Home/HeroSection";
import NavigationBar from "../Home/NavigationBar";
import ProductCard from "../Home/ProductCard";

export default function HomePage() {
  return (
    <div>
      <NavigationBar />
      <DisplayProduct />
      <HeroSection />
      <Categories />
      {/* <ProductCard />
      <Footer /> */}
    </div>
  );
}
