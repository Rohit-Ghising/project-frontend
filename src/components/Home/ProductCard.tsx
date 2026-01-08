import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { Box, IconButton, Stack, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import i14 from "../../assets/Iphone 14 pro 1.png";

import { useNavigate } from "react-router-dom";

export default function ProductCard() {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        px: "160px",
        py: "56px",
        gap: "32px",
        display: "flex",
        flexDirection: "column",
        bgcolor: "white",
      }}
    >
      <Box sx={{ gap: "32px", display: "flex", flexDirection: "row" }}>
        <Typography sx={{ fontSize: "20px", fontWeight: 600 }}>
          New Arrivals
        </Typography>
        <Typography sx={{ fontSize: "20px", fontWeight: 600 }}>
          BestSellers
        </Typography>
        <Typography sx={{ fontSize: "20px", fontWeight: 600 }}>
          {" "}
          Featured Products
        </Typography>
      </Box>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 268px)",
          gap: "16px",
        }}
      >
        {[1, 1, 1, 1, 1, 1, 1, 1].map((item, index) => (
          <Box
            sx={{
              bgcolor: "#EDEDED",
              height: "432px",
              width: "268px",
              borderRadius: "9px",
              alignItems: "center",

              px: "16px",
              py: "24px",
              position: "relative",
            }}
          >
            <IconButton
              sx={{
                position: "absolute",
                top: "16px",
                right: "16px",
              }}
            >
              <FavoriteBorderIcon />
            </IconButton>
            <Stack spacing={2} alignItems="center" sx={{ mt: 4 }}>
              <img
                src={i14}
                alt="product"
                style={{ height: 160, width: 160, objectFit: "cover" }}
              />
              <Typography sx={{ fontWeight: 600 }}>Product Name</Typography>
              <Typography sx={{ color: "gray" }}>Description</Typography>
              <Typography sx={{ fontWeight: 700 }}>$Price</Typography>
              <Button
                variant="contained"
                sx={{ bgcolor: "black", color: "white" }}
              >
                Buy Now
              </Button>
            </Stack>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
