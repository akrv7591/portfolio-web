import {ActionIcon, Grid, Stack, Tooltip} from "@mantine/core";
import {useSidebarStyles} from "@/components/home/styles";
import {content} from "@/constants/home";
import Menu from "@/components/Menu.tsx";

export default function Sidebar() {
  const {classes} = useSidebarStyles()
  const onContentClick = (elementId: string) => {
    const element = document.getElementById(elementId)
    element?.scrollIntoView()
  }
  return (
    <Grid.Col sm={12} md={1} pos={"sticky"} top={0}>
      <Stack mt={"60px"}>
        <Menu/>
        <Stack className={classes.links}>
          {content.map(c => (
            <Tooltip key={c.id.toString()}  label={c.label} position={"left"} withArrow color={"brand"}>
              <ActionIcon data-to-scrollspy-id={c.id} className={classes.link}
                          onClick={() => onContentClick(c.id.toString())}>
                <c.icon/>
              </ActionIcon>
            </Tooltip>)
          )}
        </Stack>
      </Stack>
    </Grid.Col>
  )
}