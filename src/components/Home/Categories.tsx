import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import { Box, Stack, Typography } from "@mui/material";
function Categories() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "32px",
        px: "160px",
        py: "80px",
        bgcolor: "white",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Typography sx={{ fontSize: "30px" }}> Browse By Categories</Typography>

        <Stack direction={"row"} spacing={1}>
          <ArrowBackIosIcon />
          <ArrowForwardIosIcon />
        </Stack>
      </Box>
      {/* CAto */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          gap: "32px",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            height: "128px",
            width: "160px",
            px: "52px",
            py: "24px",
            borderRadius: "15px",
            bgcolor: "#EDEDED",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "8px",
              alignItems: "center",
            }}
          >
            <PhoneIphoneIcon sx={{ height: "48px", width: "48px" }} />
            <Typography>Phone</Typography>
          </Box>
        </Box>
        <Box
          sx={{
            height: "128px",
            width: "160px",
            px: "52px",
            py: "24px",
            borderRadius: "15px",
            bgcolor: "#EDEDED",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "8px",
              alignItems: "center",
            }}
          >
            <PhoneIphoneIcon sx={{ height: "48px", width: "48px" }} />
            <Typography>Phone</Typography>
          </Box>
        </Box>
        <Box
          sx={{
            height: "128px",
            width: "160px",
            px: "52px",
            py: "24px",
            borderRadius: "15px",
            bgcolor: "#EDEDED",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "8px",
              alignItems: "center",
            }}
          >
            <PhoneIphoneIcon sx={{ height: "48px", width: "48px" }} />
            <Typography>Phone</Typography>
          </Box>
        </Box>
        <Box
          sx={{
            height: "128px",
            width: "160px",
            px: "52px",
            py: "24px",
            borderRadius: "15px",
            bgcolor: "#EDEDED",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "8px",
              alignItems: "center",
            }}
          >
            <PhoneIphoneIcon sx={{ height: "48px", width: "48px" }} />
            <Typography>Phone</Typography>
          </Box>
        </Box>
        <Box
          sx={{
            height: "128px",
            width: "160px",
            px: "52px",
            py: "24px",
            borderRadius: "15px",
            bgcolor: "#EDEDED",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "8px",
              alignItems: "center",
            }}
          >
            <PhoneIphoneIcon sx={{ height: "48px", width: "48px" }} />
            <Typography>Phone</Typography>
          </Box>
        </Box>
        <Box
          sx={{
            height: "128px",
            width: "160px",
            px: "52px",
            py: "24px",
            borderRadius: "15px",
            bgcolor: "#EDEDED",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "8px",
              alignItems: "center",
            }}
          >
            <PhoneIphoneIcon sx={{ height: "48px", width: "48px" }} />
            <Typography>Phone</Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Categories;
