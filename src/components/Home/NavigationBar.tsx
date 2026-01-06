import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  AppBar,
  Box,
  Button,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
export default function NavigationBar() {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const handleSearch = () => {
    setSearch(e.target.value);
  };
  return (
    <Box
      sx={{
        px: "160px",
        py: "16px",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        bgcolor: "white",
      }}
    >
      <Box>
        <Typography sx={{ fontSize: "24px", fontWeight: "bold" }}>
          techcart
        </Typography>
        {/* <h1 sx=" text-2xl font-bold bg-white">techcart</h1> */}
      </Box>
      <Box
        sx={{
          p: "16px",
          backgroundColor: "#F5F5F5",
          gap: "8px",
          borderRadius: "8px",
        }}
      >
        <TextField
          sx={{ border: "none" }}
          placeholder="Search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
      </Box>

      <Box sx={{ display: "flex", flexDirection: "row", gap: "52px" }}>
        <Button color="inherit" href="/about">
          Home
        </Button>
        <Button color="inherit" href="/about">
          About
        </Button>
        <Button color="inherit" href="/about">
          Contact
        </Button>
        <Button color="inherit" href="/about">
          Blog
        </Button>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          gap: "24px",
          alignItems: "center",
        }}
      >
        <FavoriteBorderIcon />
        <ShoppingCartIcon />
        <PersonOutlineIcon onClick={() => navigate(`/profile/${4}`)} />
      </Box>
    </Box>
  );
}
