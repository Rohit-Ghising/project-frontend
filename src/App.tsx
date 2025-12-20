import { Route, Routes } from "react-router-dom";
import HomePage from "./components/Pages/HomePage";
import ProductDetailsPage from "./components/Pages/ProductDetailsPage";
import ProductCart from "./components/cart/ProductCart";
import Checkout from "./components/cart/Checkout";
import Profile from "./components/Pages/Profile";
import Admin from "./components/Admin/Admin";

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/productdetails/:id" element={<ProductDetailsPage />} />
        <Route path="/cart/" element={<ProductCart />} />
        <Route path="/checkout/:orderId" element={<Checkout />} />
        <Route path="/profile/:id" element={<Profile />} />
        <Route path="/admin/*" element={<Admin />} />
      </Routes>
    </div>
  );
}
