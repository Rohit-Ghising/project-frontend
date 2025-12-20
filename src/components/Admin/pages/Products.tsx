import React from "react";
import { Box, Toolbar, Typography } from "@mui/material";

const Products: React.FC = () => (
  <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
    <Toolbar />
    <Typography variant="h4">Products Page</Typography>
  </Box>
);

export default Products;
