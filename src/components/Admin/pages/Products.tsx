import React from "react";
import { Box, Toolbar, Typography } from "@mui/material";
import AddProduct from "../components/AddProduct";

const Products: React.FC = () => (
  <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
    <Toolbar />
    <Typography variant="h4">
      <AddProduct />
    </Typography>
  </Box>
);

export default Products;
