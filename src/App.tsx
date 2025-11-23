import { Route, Routes } from "react-router-dom";
import HomePage from "./components/Pages/HomePage";
import ProductDetailsPage from "./components/Pages/ProductDetailsPage";

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/productdetails/:id" element={<ProductDetailsPage />} />
      </Routes>
    </div>
  );
}
