import { Box, Button, Stack, Typography } from "@mui/material";
import big from "../../assets/Group 1.png";

export default function Banners() {
  return (
    <Box sx={{ display: "flex ", bgcolor: "white" }}>
      <Stack direction="row" sx={{ pt: "0px" }}>
        <Box
          sx={{
            height: "612px",
            width: "360px",
            px: "32px",
            // pt: "376px",
            pb: "56px",
          }}
        >
          <Box component="img" src={big} />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "16px",
              alignItems: "center",
            }}
          >
            <Typography sx={{}}>Popular Products</Typography>
            <Typography> jello</Typography>
            <Button variant="contained">Shop Now</Button>
          </Box>
        </Box>
        {/*  */}
        <Box
          sx={{
            height: "612px",
            width: "360px",
            px: "32px",
            // pt: "376px",
            pb: "56px",
          }}
        >
          <Box component="img" src={big} />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "16px",
              alignItems: "center",
            }}
          >
            <Typography sx={{}}>Popular Products</Typography>
            <Typography> jello</Typography>
            <Button variant="contained">Shop Now</Button>
          </Box>
        </Box>
        {/*  */}
        <Box
          sx={{
            height: "612px",
            width: "360px",
            px: "32px",
            // pt: "376px",
            pb: "56px",
          }}
        >
          <Box component="img" src={big} />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "16px",
              alignItems: "center",
            }}
          >
            <Typography sx={{}}>Popular Products</Typography>
            <Typography> jello</Typography>
            <Button variant="contained">Shop Now</Button>
          </Box>
        </Box>
        {/*  */}
        <Box
          sx={{
            height: "612px",
            width: "360px",
            px: "32px",
            // pt: "376px",
            pb: "56px",
          }}
        >
          <Box component="img" src={big} />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "16px",
              alignItems: "center",
            }}
          >
            <Typography sx={{}}>Popular Products</Typography>
            <Typography> jello</Typography>
            <Button variant="contained">Shop Now</Button>
          </Box>
        </Box>
      </Stack>
    </Box>
  );
}
