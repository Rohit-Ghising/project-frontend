import React from "react";
import { Box, Toolbar, Grid } from "@mui/material";
import DashboardCard from "../components/DashboardCard";

const Dashboard: React.FC = () => {
  return (
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
      <Toolbar />
      <Grid container spacing={2}>
        <Grid item>
          <DashboardCard title="Total Orders" value={120} />
        </Grid>
        <Grid item>
          <DashboardCard title="Total Products" value={80} />
        </Grid>
        <Grid item>
          <DashboardCard title="Total Users" value={45} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;
