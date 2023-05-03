import ScrollSpy from "react-ui-scrollspy";
import {content} from "../../constants/home";
import {Grid} from "@mantine/core";
import React from "react";
import ScrollSpyBar from "@components/scroll-spy/ScrollSpyBar";

export default function Content() {

  return (
    <Grid.Col sm={12} md={7} pos={"relative"}>
      <ScrollSpy scrollThrottle={10} offsetBottom={300}>
        {content.map(c => (
          <section id={c.id.toString()} key={c.id}>
            <c.component/>
          </section>
        ))}
      </ScrollSpy>
    </Grid.Col>
  )
}