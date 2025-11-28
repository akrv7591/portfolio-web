import '@mantine/core/styles.css';
import '@mantine/carousel/styles.css';
import {HelmetProvider} from "react-helmet-async";
import {MantineProvider} from "@mantine/core";
import {theme} from "@configs/theme.ts";
import RootRouter from "@routers/RootRouter.tsx";
import "./App.css"

export default function App() {
  return (
    <MantineProvider theme={theme} defaultColorScheme={"dark"}>
      <HelmetProvider>
        <RootRouter/>
      </HelmetProvider>
    </MantineProvider>
  );
}
