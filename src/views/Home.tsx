import Header from "../components/Header";
import { Themes, useTheme } from "../providers/ThemeProvider";

const Home = () => {
  const { theme, setTheme } = useTheme();

  console.log(theme);

  return (
    <div>
      <Header />
    </div>
    // <div>
    //   <select onChange={(e) => setTheme(e.target.value as Themes)}>
    //     <option value="light">Light</option>
    //     <option value="dark">Dark</option>
    //     <option value="system">System</option>
    //   </select>

    //   <h1 className="bg-white dark:bg-red-400">THEME</h1>
    // </div>
  );
};

export default Home;
