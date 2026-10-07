import Image from "next/image";
import NavLinks from "./NavLinks";
import UserInfo from "./UserInfo";

const Header = async () => {
  const date = new Date().toLocaleString("bn-BD", {
    dateStyle: "full",
  });

  return (
    <header className="relative container mx-auto px-4 py-4 sm:py-5 ">
      <div className="mb-3 flex justify-end sm:absolute sm:right-4 sm:top-4 sm:mb-0">
        <UserInfo />
      </div>

      <div className="flex items-center justify-center gap-2 sm:gap-4">
        <Image
          src={"/logo.webp"}
          alt="Header Logo"
          height={50}
          width={50}
          priority
          className="h-10 w-10 sm:h-[50px] sm:w-[50px]"
        />
        <div className="flex flex-col items-start">
          <h3 className="text-2xl font-bold text-red-700 sm:text-3xl lg:text-4xl">
            Bangla News 24
          </h3>
          <p className="text-xs text-gray-600 sm:text-sm lg:text-base">
            {date}
          </p>
        </div>
      </div>

      <NavLinks />
    </header>
  );
};

export default Header;