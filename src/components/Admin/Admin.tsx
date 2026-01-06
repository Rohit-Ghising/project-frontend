import React from "react";
import { Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import Topbar from "./components/Topbar";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import Products from "./pages/Products";
import Orders from "./pages/Orders";
import AdminCustomers from "./components/AdminCustomers";

const Admin: React.FC = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <Topbar />
      <Sidebar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="products" element={<Products />} />
        <Route path="orders" element={<Orders />} />
        <Route path="customers" element={<AdminCustomers />} />
      </Routes>
    </Box>
  );
};

export default Admin;
