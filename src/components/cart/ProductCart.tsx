import { useState } from "react";
import Footer from "../Home/Footer";
import NavigationBar from "../Home/NavigationBar";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";
import Button from "@mui/material/Button";

export default function ProductCart() {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "iPhone",
      price: 999,
      quantity: 1,
      image:
        "https://images.unsplash.com/photo-1634403665481-74948d815f03?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aXBob25lfGVufDB8fDB8fHww",
    },
    {
      id: 1,
      name: "iPhone",
      price: 999,
      quantity: 1,
      image:
        "https://images.unsplash.com/photo-1634403665481-74948d815f03?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aXBob25lfGVufDB8fDB8fHww",
    },
    {
      id: 1,
      name: "iPhone",
      price: 999,
      quantity: 1,
      image:
        "https://images.unsplash.com/photo-1634403665481-74948d815f03?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aXBob25lfGVufDB8fDB8fHww",
    },
  ]);

  const increment = (id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };
  const decrement = (id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity - 1 } : item
      )
    );
  };
  // Remove item from cart
  const removeItem = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  // Calculate total price
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  return (
    <div className=" ">
      <NavigationBar />
      <div className="mx-24 bg-white py-24">
        <div className=" px-12  ">
          <h1 className="text-3xl">Shooping Cart</h1>

          <div className="grid grid-cols-2">
            <div className="pt-12">
              {cartItems.map((item) => (
                <div key={item.id} className="flex space-x-6">
                  <img
                    src={item.image}
                    className="h-32 w-32 rounded-lg"
                    alt=""
                  />
                  <div>
                    <p className=" text-2xl font-bold">{item.name}</p>
                    <p>#{item.id}</p>
                  </div>
                  <div className="flex space-x-4 items-center justify-center text-3xl ">
                    <RemoveIcon onClick={() => decrement(item.id)} />{" "}
                    <p className="border border-gray-600 w-14  h-12  rounded-lg items-center justify-center flex">
                      {item.quantity}
                    </p>{" "}
                    <AddIcon onClick={() => increment(item.id)} />{" "}
                    <p>${totalPrice}</p>
                    <CloseIcon onClick={() => removeItem(item.id)} />
                  </div>
                </div>
              ))}
            </div>
            {/* second grid */}
            <div className="border border-gray-700 rounded-lg">
              <div className=" space-y-8 p-12">
                <h1 className=" text-3xl font-bold">Order Summary</h1>
                <div className="space-y-2">
                  <p className="font-semibold text-gray-500">
                    Discount Code / Promo code
                  </p>
                  <input
                    type="text"
                    placeholder="Code"
                    className=" px-4 border-2 border-gray-600  rounded-lg  flex items-center justify-center h-14 w-[500px]"
                  />
                </div>
                <div className="space-y-2">
                  <p className="font-semibold text-gray-500">
                    Your Bonus card No
                  </p>
                  <input
                    type="text"
                    placeholder="Code"
                    className=" px-4 border-2 border-gray-600  rounded-lg  flex items-center justify-center h-16 w-[500px]"
                  />
                </div>
                <p className="text-3xl font-thin flex justify-between">
                  SubTotal <span>13124</span>
                </p>
                <p className="font-semibold text-gray-600 text-xl flex justify-between">
                  Estimate tax <span>1423</span>
                </p>
                <p className="font-semibold text-xl flex  text-gray-600 justify-between">
                  Shippign <span>1423</span>{" "}
                </p>

                <p className="font-semibold text-2xl flex   justify-between">
                  Total <span>1423</span>{" "}
                </p>

                <div className="flex items-center justify-center">
                  <Button
                    variant="contained"
                    sx={{
                      width: 500,
                      height: 64, // 16*4px = 64px
                      backgroundColor: "black",
                      color: "white",
                      "&:hover": {
                        backgroundColor: "gray", // optional hover effect
                      },
                    }}
                  >
                    Checkout
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
