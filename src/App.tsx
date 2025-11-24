import { Route, Routes } from "react-router-dom";
import HomePage from "./components/Pages/HomePage";
import ProductDetailsPage from "./components/Pages/ProductDetailsPage";
import ProductCart from "./components/cart/ProductCart";

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/productdetails/:id" element={<ProductDetailsPage />} />
        <Route path="/cart/:id" element={<ProductCart />} />
      </Routes>
    </div>
  );
}
