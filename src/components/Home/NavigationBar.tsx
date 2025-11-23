import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
export default function NavigationBar() {
  const [search, setSearch] = useState("");
  const handleSearch = () => {
    setSearch(e.target.value);
  };
  return (
    <div className="mx-24 bg-white py-4  h-full items-center ">
      <div className=" px-12 flex space-x-6 text-xl items-center  justify-center">
        <h1 className=" text-2xl font-bold bg-white">cyber</h1>
        <div className="flex items-center justify-center bg-gray-200 space-x-3 py-6 px-4 rounded-md ">
          <SearchIcon />
          <input
            type="text"
            placeholder="Search"
            className="bg bg-gray-200"
            onChange={handleSearch}
          />
        </div>
        <div className=" flex space-x-10 justify-end w-screen">
          <a href="">Home</a>
          <a href="">About</a>
          <a href="">Contact</a>
          <a href="">Blog</a>
          <FavoriteBorderIcon />
          <ShoppingCartIcon />
          <PersonOutlineIcon />
        </div>
      </div>
    </div>
  );
}
