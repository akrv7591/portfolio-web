import { ThemeProvider } from "./providers/ThemeProvider";
import RootRouter from "./routers/RootRouter";

function App() {
  return (
    <ThemeProvider>
      <RootRouter />
    </ThemeProvider>
  );
}

export default App;
