import ScrollSpy from "react-ui-scrollspy";
import {content} from "@constants/home";
import {Badge} from "@mantine/core";

export default function Content() {

  return (
    <ScrollSpy scrollThrottle={10} offsetBottom={100}>
      {content.map((c) => (
        <section id={c.id.toString()} key={c.id}>
          <Badge my={{md: 60, base: 20}} size={"xl"} fw={"normal"} leftSection={<c.icon size={"15px"}/>} variant={"default"}>{c.label}</Badge>
          <c.component />
        </section>
      ))}
    </ScrollSpy>
  )
}
