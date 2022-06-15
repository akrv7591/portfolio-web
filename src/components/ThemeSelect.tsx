import { IoMoonOutline, IoSunnyOutline } from "react-icons/io5";
import { useTheme } from "../providers/ThemeProvider";
import IconButton from "./IconButton";

const ThemeSelect = () => {
  const { theme, setTheme } = useTheme();
  return (
    <IconButton
      onClick={() => {
        setTheme(theme === "dark" ? "light" : "dark");
      }}
      style={{ maxHeight: "40px" }}
      className="flex justify-center items-center"
    >
      {theme === "dark" ? (
        <IoSunnyOutline className="text" fontSize={"25px"} />
      ) : (
        <IoMoonOutline className="text" fontSize={"20px"} />
      )}
    </IconButton>
  );
};

export default ThemeSelect;
