import React from "react";
import {Container, Stack} from "@mantine/core";
import Header from "./Header";

type Props = {
  children: React.ReactNode;
};

export default function Layout(props: Props): JSX.Element {
  return (
    <Stack mt={"60px"}>
      <Header/>
      {props.children}
    </Stack>
  );
};

