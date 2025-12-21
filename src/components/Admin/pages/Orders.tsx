import React from "react";
import { Box, Toolbar, Typography } from "@mui/material";
import AdminOrders from "../components/AdminOrders";

const Orders: React.FC = () => (
  <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
    <Toolbar />
    <Typography variant="h4">
      <AdminOrders />
    </Typography>
  </Box>
);

export default Orders;
