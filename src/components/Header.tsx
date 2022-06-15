import Logo from "./Logo";
import Navigation from "./Navigation";

const Header = () => {
  return (
    <div className="w-full h-20 justify-center align-middle">
      <div className="container  mx-auto grid grid-cols-2 items-center py-5 px-5 sm:px-0 ">
        <div className="">
          <Logo />
        </div>
        <div className="">
          <Navigation />
        </div>
      </div>
    </div>
  );
};

export default Header;
