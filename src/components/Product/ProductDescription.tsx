import Button from "@mui/material/Button";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

export default function ProductDescription() {
  return (
    <div className="mx-24 pt-20 bg-gray-300 ">
      {" "}
      <div className=" mx-12 px-12 bg-white">
        <p className="pt-12 text-3xl">Details</p>
        <p className="font-semibold text-gray-400 pt-12">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam vel
          earum asperiores <br />
          quis ipsam dolorum quae eligendi nulla non quaerat error <br /> qui,
          corporis praesentium harum odio enim,
          <br /> velit doloribus assumenda!
        </p>
        <div className=" py-12">
          <p className="text-3xl font-thin">Screen</p>

          {[1, 1, 1, 1, 1].map((index) => (
            <div className="relative pt-4 pb-2 ">
              <div className="flex justify-between text-2xl space-y-6 ">
                <span>Screen diagonal</span>
                <span>6.7</span>
              </div>
              <div className="absolute left-0 right-0 bottom-0 border-b border-black "></div>
            </div>
          ))}

          <div className="flex justify-center pt-12">
            <Button
              variant="outlined"
              sx={{
                width: "300px",
                height: "70px",
                border: "2px solid black",
                fontWeight: "bold",
                color: "black",
              }}
            >
              View More
              <KeyboardArrowDownIcon />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
