import ScrollSpy from "react-ui-scrollspy";
import {content} from "../../constants/home";
import {Grid} from "@mantine/core";
import React from "react";

export default function Content() {

  return (
    <Grid.Col sm={12} md={7} pos={"relative"}>
      <ScrollSpy scrollThrottle={10} offsetBottom={300}>
        {content.map(({id, component: Component, icon}) => (
          <section id={id.toString()} key={id}>
            <Component icon={icon}/>
          </section>
        ))}
      </ScrollSpy>
    </Grid.Col>
  )
}