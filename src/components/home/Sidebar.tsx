import {ActionIcon, Flex, Stack, Text, Tooltip} from "@mantine/core";
import {content} from "@constants/home";
import styles from "@styles/css/sidebar.module.css"

export default function Sidebar() {
  const onContentClick = (elementId: string) => {
    const element = document.getElementById(elementId)
    element?.scrollIntoView()
  }
  return (
    <Flex className={styles.links}>
      {content.map(c => (
        <Tooltip
          key={c.id.toString()}
          label={c.label}
          position={"right"}
          withArrow
        >
          <Stack align={"center"} gap={"0px"}>
            <ActionIcon
              data-to-scrollspy-id={c.id.toString()}
              className={styles.link}
              variant={"transparent"}
              size={"lg"}
              onClick={() => onContentClick(c.id.toString())}>
              <c.icon size={18} color={"var(--mantine-color-text)"}/>
            </ActionIcon>
            <Text display={{lg: "none", sm: "block"}} size={"xs"} c={"dimmed"}>{c.label}</Text>
          </Stack>
        </Tooltip>)
      )}
    </Flex>

  )
}
