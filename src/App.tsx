import {HelmetProvider} from "react-helmet-async";
import '@mantine/core/styles.css';
import {MantineProvider} from "@mantine/core";
import {theme} from "@configs/theme.ts";
import RootRouter from "@routers/RootRouter.tsx";
import '@mantine/core/styles.css';
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
