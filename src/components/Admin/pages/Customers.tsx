import React from "react";
import { Box, Toolbar, Typography } from "@mui/material";
import AdminCustomers from "../components/AdminCustomers";

const Customers: React.FC = () => (
  <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
    <Toolbar />
    <Typography variant="h4" gutterBottom>
      Customers
    </Typography>
    <AdminCustomers />
  </Box>
);

export default Customers;
