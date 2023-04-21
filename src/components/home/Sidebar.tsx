import {ActionIcon, Stack, Tooltip} from "@mantine/core";
import Menu from "../Menu";
import {useSidebarStyles} from "./styles";
import {content} from "../../constants/home";

export default function Sidebar() {
  const {classes} = useSidebarStyles()
  const onContentClick = (elementId: string) => {
    const element = document.getElementById(elementId)
    element?.scrollIntoView()
  }
  return (
    <Stack className={classes.root}>
      <Menu/>
      <Stack className={classes.links} >
        {content.map(c => (
          <Tooltip label={c.label} position={"left"} withArrow color={"brand"}>
            <ActionIcon data-to-scrollspy-id={c.id} key={c.id.toString()} className={classes.link} onClick={() => onContentClick(c.id.toString())}>
              <c.icon/>
            </ActionIcon>
          </Tooltip>)
        )}
      </Stack>
    </Stack>
  )
}