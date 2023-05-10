import { HelmetProvider } from "react-helmet-async";
import { ThemeProvider } from "@/providers/ThemeProvider";
import RootRouter from "@/routers/RootRouter";
import Mantine from "@/providers/Mantine";
import "./index.css"

export default function App() {
  return (
    <ThemeProvider>
      <Mantine>
        <HelmetProvider>
          <RootRouter />
        </HelmetProvider>
      </Mantine>
    </ThemeProvider>
  );
}