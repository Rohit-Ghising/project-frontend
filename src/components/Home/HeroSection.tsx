import { Box, Button, Typography } from "@mui/material";
import play from "../../assets/PlayStation.png";
import play5 from "../../assets/Playstation 5.png";
import head from "../../assets/hero__gnfk5g59t0qe_xlarge_2x 1.png";
import vision from "../../assets/image 36.png";
import mac from "../../assets/MacBook Pro 14.png";

export default function HeroSection() {
  return (
    <Box sx={{ display: "flex", flexDirection: "row", bgcolor: "white" }}>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            pl: "128px",
            pr: "48px",
          }}
        >
          <img src={play} alt="" />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "16px",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img src={play5} alt="" />

            <Typography
              sx={{
                fontWeight: "semibold",
                gap: "8px",
                display: "flex",
                flexDirection: "column",
              }}
            >
              Lorem ipsum dolor sit amet <br />
              consectetur adipisicing elit. <br /> Libero aperiam natus vero.
            </Typography>
          </Box>
        </Box>
        {/*  */}
        <Box sx={{ display: "flex", flexDirection: "row" }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              pl: "128px",
              pr: "48px",
            }}
          >
            <img src={head} alt="" />

            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                // pl: "128px",
                // pr: "48px",
              }}
            >
              <Typography sx={{ fontSize: "30px" }}>
                Apple <br /> AirPods <br /> Max
              </Typography>
              <Typography>
                Lorem ipsum, dolor <br />
                sit amet consectetur adipisicing
              </Typography>
            </Box>
          </Box>
          {/*  */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              pl: "156px",
              pr: "48px",
              bgcolor: "#353535",
            }}
          >
            <img src={vision} alt="" />

            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                // pl: "156px",
                // pr: "48px",
              }}
            >
              <Typography sx={{ fontSize: "30px" }}>
                Apple <br /> AirPods <br /> Max
              </Typography>
              <Typography>
                Lorem ipsum, dolor <br />
                sit amet consectetur adipisicing
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>

      {/*  */}
      <Box
        sx={{
          py: "44px",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          bgcolor: "#909090",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "24px",
            pr: "264px",
            pl: "56px",
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
            Macbook
          </Typography>
          <Typography
            sx={{
              fontSize: "96px",
              lineHeight: "72px",
              fontWeight: "semibold",
              color: "#FFFFFF",
            }}
          >
            Air
          </Typography>
          <Typography
            sx={{
              fontSize: "18px",
              lineHeight: "24px",

              color: "#FFFFFF",
            }}
          >
            Lorem ipsum dolor sit amet. Lorem <br />
            ipsum dolor sit amet consectetur adipisicing elit.
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
          <img src={mac} alt="" />
        </Box>
      </Box>
    </Box>
  );
}
