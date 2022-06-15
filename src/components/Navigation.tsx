import { useState } from "react";
import { IoMenuOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import IconButton from "./IconButton";
import NavigationModal from "./modals/NavigationModal";
import ThemeSelect from "./ThemeSelect";

const Navigation = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="z-20">
      <NavigationModal open={open} onClose={() => setOpen(false)} />
      <div className="hidden sm:flex  items-center space-x-10 justify-end">
        <Link to={"/#"} className={"nav-link"}>
          Home
        </Link>
        <Link to={"/#"} className={"nav-link"}>
          About{" "}
        </Link>
        <Link to={"/#"} className={"nav-link"}>
          Blog
        </Link>
        <Link to={"/#"} className={"nav-link"}>
          Portfolio
        </Link>
        <ThemeSelect />
      </div>
      <div className="flex sm:hidden w-full justify-end">
        {!open && (
          <>
            <ThemeSelect />
            <IconButton onClick={() => setOpen(!open)}>
              <IoMenuOutline className="text text-2xl animate__animated animate__rotateIn" />
            </IconButton>
          </>
        )}
      </div>
    </div>
  );
};

export default Navigation;
