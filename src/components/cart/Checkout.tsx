import { useState } from "react";
import Footer from "../Home/Footer";
import NavigationBar from "../Home/NavigationBar";

import Button from "@mui/material/Button";

export default function Checkout() {
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
      name: "iPhone 17 pro max",
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

  return (
    <div className=" ">
      <NavigationBar />
      <div className="mx-24 bg-white py-24">
        <div className=" px-12  ">
          <div className="grid grid-cols-2 space-x-12">
            <div className="pt-12  border rounded-lg border-gray-700   pl-6">
              <h1 className="text-3xl">Summary</h1>
              <div className="flex flex-col space-y-4">
                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center space-x-6 p-2 border-b border-gray-200 "
                  >
                    <img
                      src={item.image}
                      className="h-20 w-20 rounded-lg object-cover  "
                      alt=""
                    />
                    <div className="flex flex-1 justify-between pr-4">
                      <p className="text-2xl font-bold   ">{item.name} </p>
                      <p className="text-2xl font-bold  ">{item.price}</p>
                    </div>
                  </div>
                ))}
                <div className=" space-y-6 px-8">
                  <p className="text-xl font-bold">
                    Address{" "}
                    <span className=" font-thin flex justify-between ">
                      kathamndu Nepal
                    </span>
                  </p>
                  <p className="text-xl font-bold">
                    Shipment Method{" "}
                    <span className=" font-thin flex justify-between ">
                      Free
                    </span>
                  </p>

                  <p className="text-3xl font-thin flex justify-between ">
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
                </div>
              </div>
            </div>

            {/* second grid */}
            <div className="flex justify-center p-6">
              <div className="bg-white rounded-2xl shadow-2xl w-full max-w-3xl border border-gray-200 p-10">
                {/* Header */}
                <h1 className="text-4xl font-bold text-center mb-10">
                  Payment
                </h1>

                {/* Payment Options */}
                <div className="flex flex-col space-y-6">
                  {/* eSewa Option */}
                  <label className="flex items-center p-6 border rounded-xl hover:shadow-2xl cursor-pointer transition">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/en/9/96/ESewa_logo.png"
                      alt="eSewa"
                      className="h-16 w-16 mr-6"
                    />
                    <div className="flex-1">
                      <p className="text-2xl font-semibold">eSewa Wallet</p>
                      <p className="text-gray-500 text-base mt-1">
                        Pay securely using your eSewa account
                      </p>
                    </div>
                    <input
                      type="radio"
                      name="payment"
                      className="form-radio h-6 w-6 text-blue-600"
                    />
                  </label>

                  {/* Cash on Delivery Option */}
                  <label className="flex items-center p-6 border rounded-xl hover:shadow-2xl cursor-pointer transition">
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/3920/3920672.png"
                      alt="Cash on Delivery"
                      className="h-16 w-16 mr-6"
                    />
                    <div className="flex-1">
                      <p className="text-2xl font-semibold">Cash on Delivery</p>
                      <p className="text-gray-500 text-base mt-1">
                        Pay with cash when your order arrives
                      </p>
                    </div>
                    <input
                      type="radio"
                      name="payment"
                      className="form-radio h-6 w-6 text-blue-600"
                    />
                  </label>
                </div>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row justify-between mt-10 gap-6">
                  <Button
                    variant="contained"
                    sx={{
                      flex: 1,
                      height: 60,
                      fontSize: 18,
                      backgroundColor: "white",
                      color: "black",
                      "&:hover": { backgroundColor: "gray" },
                    }}
                  >
                    Back
                  </Button>
                  <Button
                    variant="contained"
                    sx={{
                      flex: 1,
                      height: 60,
                      fontSize: 18,
                      backgroundColor: "#1a1a1a",
                      color: "white",
                      "&:hover": { backgroundColor: "gray" },
                    }}
                  >
                    Pay
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
