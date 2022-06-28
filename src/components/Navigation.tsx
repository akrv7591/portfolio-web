import { useState } from "react";
import { IoMenuOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import { navigationList } from "../constants/navigation";
import IconButton from "./IconButton";
import NavigationModal from "./modals/NavigationModal";
import ThemeSelect from "./ThemeSelect";

const Navigation = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="z-20">
      {open && <NavigationModal open={open} onClose={() => setOpen(false)} />}
      <div className="hidden sm:flex  items-center space-x-10 justify-end">
        {navigationList.map((navigation) => (
          <NavLink
            key={navigation.id}
            to={navigation.to}
            className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
          >
            {navigation.label}
          </NavLink>
        ))}
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
