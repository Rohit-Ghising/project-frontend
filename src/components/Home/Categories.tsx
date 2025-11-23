import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
function Categories() {
  return (
    <div className="mx-24 bg-gray-200 py-12 px-12">
      <div className="flex items-center">
        <p className="text-3xl">Browse By Categories</p>
        <div className="flex justify-center items-end ml-auto">
          <ArrowBackIosIcon />
          <ArrowForwardIosIcon />
        </div>
      </div>

      {/* categories */}

      <div className="grid grid-cols-6 gap-6  ">
        <div className="bg-gray-300 py-12 px-20 items-center justify-center  mt-4 rounded-lg ">
          <PhoneIphoneIcon sx={{ fontSize: 50 }} />
          <p className="text-2xl">Phones</p>
        </div>
        <div className="bg-gray-300 py-12 px-20 items-center justify-center  mt-4 rounded-lg ">
          <PhoneIphoneIcon sx={{ fontSize: 50 }} />
          <p className="text-2xl">Phones</p>
        </div>
        <div className="bg-gray-300 py-12 px-20 items-center justify-center  mt-4 rounded-lg ">
          <PhoneIphoneIcon sx={{ fontSize: 50 }} />
          <p className="text-2xl">Phones</p>
        </div>
        <div className="bg-gray-300 py-12 px-20 items-center justify-center  mt-4 rounded-lg ">
          <PhoneIphoneIcon sx={{ fontSize: 50 }} />
          <p className="text-2xl">Phones</p>
        </div>
        <div className="bg-gray-300 py-12 px-20 items-center justify-center  mt-4 rounded-lg ">
          <PhoneIphoneIcon sx={{ fontSize: 50 }} />
          <p className="text-2xl">Phones</p>
        </div>
        <div className="bg-gray-300 py-12 px-20 items-center justify-center  mt-4 rounded-lg ">
          <PhoneIphoneIcon sx={{ fontSize: 50 }} />
          <p className="text-2xl">Phones</p>
        </div>
      </div>
    </div>
  );
}

export default Categories;
