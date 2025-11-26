import {
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Paper,
  Box,
  Typography,
  Avatar,
} from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PaymentIcon from "@mui/icons-material/Payment";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";

export default function Sidebar({ setSection, setShowLogout, section }) {
  const navItems = [
    { id: "dashboard", label: "Dashboard", icon: <DashboardIcon /> },
    { id: "orders", label: "My Orders", icon: <LocalShippingIcon /> },
    { id: "addresses", label: "Addresses", icon: <LocationOnIcon /> },
    { id: "payments", label: "Payment Methods", icon: <PaymentIcon /> },
    { id: "settings", label: "Account Settings", icon: <SettingsIcon /> },
  ];

  return (
    <Paper
      elevation={3}
      style={{ width: 260, height: "100vh", position: "sticky", top: 0 }}
    >
      {/* Profile Section */}
      <Box sx={{ p: 2, textAlign: "center" }}>
        <Avatar
          alt="Rohit Ghising"
          src="https://i.pravatar.cc/150?img=3"
          sx={{ width: 64, height: 64, margin: "0 auto", mb: 1 }}
        />
        <Typography variant="h6" fontWeight="bold">
          Rohit Ghising
        </Typography>
      </Box>

      {/* Navigation Links */}
      <List>
        {navItems.map((item) => (
          <ListItemButton
            key={item.id}
            selected={section === item.id}
            onClick={() => setSection(item.id)}
          >
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.label} />
          </ListItemButton>
        ))}

        <ListItemButton onClick={() => setShowLogout(true)}>
          <ListItemIcon>
            <LogoutIcon />
          </ListItemIcon>
          <ListItemText primary="Logout" />
        </ListItemButton>
      </List>
    </Paper>
  );
}
