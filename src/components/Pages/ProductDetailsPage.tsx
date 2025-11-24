import Footer from "../Home/Footer";
import NavigationBar from "../Home/NavigationBar";
import ProductDescription from "../Product/ProductDescription";
import ProductInfo from "../Product/ProductInfo";

export default function ProductDetailsPage() {
  return (
    <div>
      <NavigationBar />
      <ProductInfo />
      <ProductDescription />
      <Footer />
    </div>
  );
}
