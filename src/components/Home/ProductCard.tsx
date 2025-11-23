import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Button from "@mui/material/Button";
export default function ProductCard() {
  return (
    <div className="mx-24 bg-white py-8 px-12">
      <div className="flex text-2xl space-x-3  ">
        <a href="" className="underline">
          New Arrivlas
        </a>
        <a href="" className="text-gray-400">
          Best Seller
        </a>
        <a href="" className="text-gray-400">
          Featured Products
        </a>
      </div>
      <div className="grid grid-cols-4 gap-6">
        {[1, 1, 1, 1, 1, 1, 1, 1].map((item) => (
          <div className="bg-gray-400 w-[300px] h-[500px] relative rounded-lg">
            <FavoriteBorderIcon className="absolute top-2 right-2 text-white  " />
            <div className="pt-12 px-6">
              <img
                src="https://images.unsplash.com/photo-1591337676887-a217a6970a8a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aXBob25lfGVufDB8fDB8fHww"
                alt=""
              />
              <div className="text-xl flex ">
                <div className=" flex flex-col justify-center items-center space-y-2">
                  <p> Apple Iphone 17Pro max</p>
                  <p>128gb deep purple</p>
                  <p className="font-bold text-2xl ">$1000</p>
                  <Button
                    variant="contained"
                    sx={{
                      background: "black",
                      paddingX: 4, // left-right
                      paddingY: 1.5, // top-bottom
                      fontSize: "18px",
                    }}
                  >
                    Buy Now
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
