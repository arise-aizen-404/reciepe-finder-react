import { Heart, Home } from "lucide-react";
import { Link } from "react-router-dom";

export const Sidebar = () => {
  return (
    <>
      <DesktopSidebar />
      <MobileSidebar />
    </>
  );
};

const DesktopSidebar = () => {
  return (
    <div className="p-3 md:p-10 border-r min-h-screen w-24 md:w-64 hidden sm:block">
      <div className="flex flex-col gap-20 sticky top-10 left-0">
        <div className="w-full">
          <img src="./images/logo.svg" alt="logo" className="hidden md:block" />
          <img
            src="./images/mobile-logo.svg"
            alt="logo"
            className="block md:hidden"
          />
        </div>
        <ul className="flex flex-col items-center md:items-start gap-8">
          <Link to={"/"} className="flex gap-1 items-center">
            <Home size={24} />
            <span className="font-bold hidden md:block">Home</span>
          </Link>
          <Link to={"/favourites"} className="flex gap-1 items-center">
            <Heart size={24} />
            <span className="font-bold hidden md:block">Favourites</span>
          </Link>
        </ul>
      </div>
    </div>
  );
};

const MobileSidebar = () => {
  return (
    <>
      <div className="flex justify-center gap-10 border-t bg-neutral fixed w-full bottom-0 left-0 z-10 p-3 sm:hidden">
        <Link to="/">
          <Home size={24} />
        </Link>
        <Link to="/favourites">
          <Heart size={24} />
        </Link>
      </div>
    </>
  );
};
