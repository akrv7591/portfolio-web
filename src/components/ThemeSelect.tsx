import { IoMoon, IoSunny, IoHardwareChip } from "react-icons/io5";
import { Themes, useTheme } from "../providers/ThemeProvider";
import IconButton from "./IconButton";
import Text from "./Text";

const themes = [
  {
    id: 1,
    label: "light",
    icon: IoSunny,
  },
  {
    id: 2,
    label: "dark",
    icon: IoMoon,
  },
  {
    id: 3,
    label: "system",
    icon: IoHardwareChip,
  },
];

const ThemeSelect = () => {
  const { theme, setTheme } = useTheme();
  const ThemeIcon = themes.find((t) => t.label === theme)?.icon;
  return (
    <div className="relative group w-40">
      <IconButton style={{ maxHeight: "40px" }} className="flex justify-center items-center">
        {ThemeIcon && <ThemeIcon className="text" fontSize={20} />}
      </IconButton>
      <div className="absolute h-0 w-full  overflow-hidden group-hover:h-auto">
        <div className="flex flex-col backdrop-blur-md mt-4 rounded-md border  py-3 bg-secondary/50 dark:bg-card/50 border-primary/30">
          {themes.map((t) => (
            <div
              key={t.id}
              className="flex flex-row justify-between transition-colors py-1 px-4 cursor-pointer  hover:bg-primary/20"
              onClick={() => setTheme(t.label as Themes)}
            >
              <Text className="text-sm capitalize">{t.label}</Text>
              <t.icon className="text" fontSize={"20px"} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ThemeSelect;
