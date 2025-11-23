import Button from "@mui/material/Button";

export default function DisplayProduct() {
  return (
    <div className="mx-24 py-28 bg-gray-700 h-[600px] flex">
      <div className="px-12  space-y-2">
        <p className="text-3xl font-semibold ">Pro.Beyond.</p>
        <p className="text-7xl text-white font-serif">Iphone 18 Pro</p>
        <p className="font-semibold text-gray-300">
          Created to change everything for better. For everyone
        </p>
        <Button
          variant="text"
          sx={{
            backgroundColor: "#374151",
            color: "white",
            border: "2px solid white",
            borderRadius: "4px",
          }}
        >
          {" "}
          Shop Now
        </Button>
      </div>
      <div className="justify-end flex">
        <img
          src="https://plus.unsplash.com/premium_photo-1681313824743-7b5a2a635938?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8aXBob25lfGVufDB8fDB8fHww"
          alt=""
        />
      </div>
    </div>
  );
}
