import { Box, Button, Typography } from "@mui/material";
import img from "../../assets/Iphone Image.png";

export default function DisplayProduct() {
  return (
    <Box
      sx={{
        px: "160px",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        bgcolor: "black",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "24px",
          justifyContent: "center",
          alignItems: "start",
        }}
      >
        <Typography
          sx={{
            fontSize: "25px",
            lineHeight: "32px",
            fontWeight: "semibold",
            color: "#FFFFFF",
          }}
        >
          Pro Beyond
        </Typography>
        <Typography
          sx={{
            fontSize: "96px",
            lineHeight: "72px",
            fontWeight: "semibold",
            color: "#FFFFFF",
          }}
        >
          Iphone 17 Pro
        </Typography>
        <Typography
          sx={{
            fontSize: "18px",
            lineHeight: "24px",

            color: "#FFFFFF",
          }}
        >
          Lorem ipsum dolor sit amet.
        </Typography>
        <Button
          variant="outlined"
          sx={{
            color: "white",
            px: "56px",
            py: "16px",
            lineHeight: "24px",
            fontSize: "16px",
          }}
        >
          {" "}
          Shop Now
        </Button>
      </Box>
      <Box>
        <img src={img} alt="" />
      </Box>
    </Box>
  );
}
