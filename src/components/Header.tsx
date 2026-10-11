import Image from "next/image";
import NavLinks from "./NavLinks";
import UserInfo from "./UserInfo";

const Header = async () => {
  const date = new Date().toLocaleString("bn-BD", {
    dateStyle: "full",
  });

  return (
    <header className="relative container mx-auto px-4 py-4 sm:py-5">
      <div className="flex items-center justify-between gap-2 lg:block">
        {/* Logo, Name and Date */}
        <div className="flex min-w-0 items-center justify-start gap-1 sm:justify-center sm:gap-3 md:gap-4">
          <Image
            src={"/logo.webp"}
            alt="Header Logo"
            height={50}
            width={50}
            priority
            className="h-9 w-9 shrink-0 sm:h-11 sm:w-11 md:h-[50px] md:w-[50px]"
          />

          <div className="flex min-w-0 flex-col items-start">
            <h3 className="text-lg font-bold text-red-700 sm:text-2xl md:text-3xl lg:text-4xl">
              Bangla News 24
            </h3>

            <p className="text-xs text-gray-600 sm:text-xs md:text-sm lg:text-base">
              {date}
            </p>
          </div>
        </div>

        {/* User Info */}
        <div className="shrink-0 sm:absolute sm:right-4 sm:top-4">
          <UserInfo />
        </div>
      </div>
      <NavLinks />
    </header>
  );
};

export default Header;
