import Image from "next/image";
import NavLinks from "./NavLinks";

const Header = async () => {
  const date = new Date().toLocaleString("bn-BD", {
    dateStyle: "full",
  });


  return (
    <header className=" relative container mx-auto p-4">
      <div className="flex items-center gap-1 justify-center sm:flex-row sm:gap-4">
        <Image src={"/logo.webp"} alt="Header Logo" height={50} width={50} />
        <div className="flex flex-col items-center sm:items-start">
          <h3 className="text-3xl font-bold text-red-700">Bangla News 24</h3>
          <p className="text-gray-600">{date}</p>
        </div>
      </div>

      <div className=" absolute right-4 top-4 flex items-center gap-3 text-sm">
        <button className="btn">সাইন ইন</button>
        <button className="btn bg-red-600 text-white">সাইন আপ</button>
      </div>

      <NavLinks></NavLinks>
      
    </header>
  );
};

export default Header;
