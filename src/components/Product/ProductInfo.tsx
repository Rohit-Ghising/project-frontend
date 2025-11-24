import Button from "@mui/material/Button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ProductInfo() {
  const navigate = useNavigate();
  const images = [
    "https://media.istockphoto.com/id/2173563100/photo/iphone-16-pro-smartphone.jpg?s=612x612&w=0&k=20&c=SXECFz1NMEdbYK9XzJYsn7JIPAivJUXRwG7dwxN_QM8=",
    "https://images.unsplash.com/photo-1591337676887-a217a6970a8a?w=600&auto=format&fit=crop&q=60",
    "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600&auto=format&fit=crop&q=60",
    "https://images.unsplash.com/photo-1549924231-f129b911e442?w=600&auto=format&fit=crop&q=60",
  ];
  const [selectedImage, setSelectedImage] = useState(images[0]);

  const colors = ["#000000", "#ffffff", "#ff0000", "#0084ff", "#00c853"];
  const [selectColor, setSelectColor] = useState();
  const storages = ["128GB", "256GB", "512GB", "1tb"];
  const [selectStorage, setSelectStorage] = useState(null);

  return (
    <div className="mx-24 bg-white pt-12 px-12">
      <div className="grid grid-cols-2  ">
        <div>
          <div className="flex space-x-10">
            <div className="flex flex-col space-y-2">
              {images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  className={`w-24 h-44 object-cover rounded-lg cursor-pointer border-2 ${
                    selectedImage === img ? "border-black" : "border-gray-300"
                  }`}
                  alt=""
                  onClick={() => setSelectedImage(img)}
                />
              ))}
            </div>

            <img
              src={selectedImage}
              className="object-cover h-[700px] w-[600px]"
            />
          </div>{" "}
        </div>
        <div className="">
          <h1 className="text-5xl font-bold">Apple iphone 17promax</h1>
          <p className="text-4xl font-bold pt-6">$1000</p>

          <div className="pt-6 flex space-x-6 items-center">
            <p className="font-thin text-xl">Select color :</p>

            <div className="flex space-x-2">
              {colors.map((color, index) => (
                <div
                  onClick={() => setSelectColor(color)}
                  key={index}
                  className={`w-10 h-10 rounded-full border ${
                    selectColor === color ? "ring-2 ring-blue-500" : ""
                  }`}
                  style={{ backgroundColor: color }}
                ></div>
              ))}
            </div>
          </div>
          {/* storage */}
          {/* -------------------------------------------------------------------------- */}
          <div className=" flex space-x-8 pt-4 ">
            {" "}
            {storages.map((item, index) => (
              <p
                onClick={() => setSelectStorage(item)}
                key={index}
                className={`px-4 py-2 border h-14 w-32 items-center flex justify-center rounded-lg font-semibol text-xl ${
                  selectStorage === item ? "bg-black text-white" : ""
                } `}
              >
                {item}
              </p>
            ))}
          </div>
          {/* specs */}

          <div className="grid grid-cols-3 pt-12">
            {[1, 1, 1, 1, 1, 1].map((index) => (
              <div className=" grid items-center justify-center w-52 rounded-lg bg-gray-700 h-18 border border-b-2 space-y-2">
                <p className=" text-xl p-4">
                  Screen size <br /> 1123
                </p>
              </div>
            ))}
          </div>
          <p className="text-xl mr-12">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
            nihil autem minus sit vero adipisci distinctio libero veniam enim
            eveniet.lorem10 Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Modi, velit?
          </p>
          <div className="space-x-6 pt-4">
            <Button
              variant="outlined"
              sx={{
                backgroundColor: "black",
                color: "white",
                borderColor: "black",
                fontSize: "20px",
                height: "70px",
                width: "300px",
              }}
            >
              Add to Wish List
            </Button>
            <Button
              onClick={() => navigate(`/cart/${5}`)}
              variant="outlined"
              sx={{
                backgroundColor: "white",
                color: "black",
                borderColor: "black",
                fontSize: "20px",
                height: "70px",
                width: "300px",
              }}
            >
              {" "}
              Add to cart
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
