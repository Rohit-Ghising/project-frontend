import Categories from "../Home/Categories";
import DisplayProduct from "../Home/DisplayProduct";
import NavigationBar from "../Home/NavigationBar";
import ProductCard from "../Home/ProductCard";

export default function HomePage() {
  return (
    <div>
      <NavigationBar />
      <DisplayProduct />
      <Categories />
      <ProductCard />
    </div>
  );
}
