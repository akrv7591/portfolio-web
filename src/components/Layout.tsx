import React from "react";
import { Stack} from "@mantine/core";
// import Header from "./Header";

type Props = {
  children: React.ReactNode;
};

export default function Layout(props: Props): JSX.Element {
  return (
    <Stack>
      {/*<Header/>*/}

      {props.children}
    </Stack>
  );
};

