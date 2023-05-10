import { MantineProvider } from "@mantine/core";
import { useTheme } from "./ThemeProvider";
import React from "react";

interface Props {
  children: React.ReactNode;
}

export default function Mantine(props: Props) {
  const theme = useTheme();
  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      withCSSVariables
      theme={{
        fontFamily: "'Titillium Web', sans-serif",
        colors: {
          brand: ['#d7f5f1', '#c4f0e9', '#b0ebe2', '#9ce6db', '#88e1d4', '#74dccd', '#61d7c5', '#4dd2be', '#39cdb7'],
        },
        defaultGradient: theme.theme === "dark"?
          { from: '#12100E', to: '#2B4162', deg: 180 }:
          { from: '#ffffff', to: '#ffffff', deg: 10 },
        colorScheme: theme.theme,
        primaryColor: "brand",
      }}
    >
      {props.children}
    </MantineProvider>
  );
}
