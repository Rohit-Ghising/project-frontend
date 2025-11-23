import { useState } from "react";

export default function ProductInfo() {
  const images = [
    "https://media.istockphoto.com/id/2173563100/photo/iphone-16-pro-smartphone.jpg?s=612x612&w=0&k=20&c=SXECFz1NMEdbYK9XzJYsn7JIPAivJUXRwG7dwxN_QM8=",
    "https://images.unsplash.com/photo-1591337676887-a217a6970a8a?w=600&auto=format&fit=crop&q=60",
    "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600&auto=format&fit=crop&q=60",
    "https://images.unsplash.com/photo-1549924231-f129b911e442?w=600&auto=format&fit=crop&q=60",
  ];
  const [selectedImage, setSelectedImage] = useState(images[0]);

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
        <div></div>
      </div>
    </div>
  );
}
