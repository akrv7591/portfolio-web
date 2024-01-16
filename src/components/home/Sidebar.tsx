import {ActionIcon, Box, Stack, Tooltip} from "@mantine/core";
import {content} from "@constants/home";
import styles from "@styles/css/sidebar.module.css"
import Menu from "@components/Menu";

export default function Sidebar() {
  const onContentClick = (elementId: string) => {
    const element = document.getElementById(elementId)
    element?.scrollIntoView()
  }
  return (
    <Box pos={"sticky"} top={60} style={{flexGrow: "revert"}}>
      <Stack>
        <Menu/>
        <Stack className={styles.links}>
          {content.map(c => (
            <Tooltip
              key={c.id.toString()}
              label={c.label}
              position={"right"}
              withArrow
            >
              <ActionIcon
                data-to-scrollspy-id={c.id.toString()}
                className={styles.link}
                variant={"transparent"}
                size={"lg"}
                onClick={() => onContentClick(c.id.toString())}>
                <c.icon size={18} color={"var(--mantine-color-text)"}/>
              </ActionIcon>
            </Tooltip>)
          )}
        </Stack>
      </Stack>
    </Box>


  )
}
